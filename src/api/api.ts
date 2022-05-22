import axios from "axios";

export async function fetchUsers(page: number = 1) {
   try {
      const response = await axios.get(
         `https://dummyapi.io/data/v1/user?page=${page}&limit=10`,
         {
            headers: {
               "app-id": "6285368e6c5fe3f61de44084",
            },
         }
      );
      return response.data;
   } catch (err: any) {
      console.log(err.response);
   }
}

export async function fetchUser(id: string = "") {
   try {
      const response = await axios.get(`https://dummyapi.io/data/v1/user/${id}`, {
         headers: {
            "app-id": "6285368e6c5fe3f61de44084",
         },
      });
      return response.data;
   } catch (err: any) {
      console.log(err.response);
   }
}
