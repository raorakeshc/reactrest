import Configuration from "./configuration";
class ItemService {
  constructor() {
    this.config = new Configuration();
  }
  async retrieveItems() {
    return fetch(this.config.ITEM_COLLECTION_URL)
      .then(response => {
        if (!response.ok) {
          this.handleResponseError(response);
        }
        return response.json();
      })
      .then(json => {
        console.log("Retrieved items:");
        console.log(json);
        const items = [];
        const itemArray = json.result;
        console.log(itemArray);
        for (var i = 0; i < itemArray.length; i++) {
          itemArray[i]["id"] =
            itemArray[i]._links.self.href +
            "?_format=json&access-token=2sJ4a1vROGHzxiNS37YsckmOGvBk9-n_7m7s";
          items.push(itemArray[i]);
        }
        console.log(items);
        return items;
      })
      .catch(error => {
        this.handleError(error);
      });
  }
  async getItem(id) {
    console.log("ItemService.getItem():");
    console.log("Item: " + id);
    return fetch(id)
      .then(response => {
        if (!response.ok) {
          this.handleResponseError(response);
        }
        return response.json();
      })
      .then(item => {
        return item.result;
      })
      .catch(error => {
        this.handleError(error);
      });
  }
  async createItem(newitem) {
    console.log("ItemService.createItem():");
    console.log(newitem);
    return fetch(this.config.ITEM_COLLECTION_URL, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newitem)
    })
      .then(response => {
        if (!response.ok) {
          this.handleResponseError(response);
        }
        return response.json();
      })
      .catch(error => {
        this.handleError(error);
      });
  }
  async deleteItem(id) {
    console.log("ItemService.deleteItem():");
    console.log("item: " + id);
    return fetch(id, {
      method: "DELETE",
      mode: "cors"
    })
      .then(response => {
        if (!response.ok) {
          this.handleResponseError(response);
        }
      })
      .catch(error => {
        this.handleError(error);
      });
  }
  async updateItem(item) {
    console.log("ItemService.updateItem():");
    console.log(item);
    return fetch(item.id, {
      method: "PUT",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(item)
    })
      .then(response => {
        if (!response.ok) {
          this.handleResponseError(response);
        }
        return response.json();
      })
      .catch(error => {
        this.handleError(error);
      });
  }
  handleResponseError(response) {
    throw new Error("HTTP error, status = " + response.status);
  }
  handleError(error) {
    console.log(error.message);
  }
}
export default ItemService;
