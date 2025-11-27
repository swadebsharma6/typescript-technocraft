{
  //Promise

  type Todo = {
    id: number;
    userId: number;
    title: string;
    completed: boolean;
  };

  const getTodo = async (): Promise<Todo> => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/1`
    );
    const data = await response.json();
    return data;
    //     console.log(data);
  };

  getTodo();

  //simulate
  const createPromise = (): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
      const data: string = "Something";

      if (data) {
        resolve(data);
      } else {
        reject("Fail to load data");
      }
    });
  };

  //calling the function
  const showData = async (): Promise<string> => {
    const data: string = await createPromise();
    // console.log(data);
    return data;
  };

  showData();

  //But if the data is object

  type Something = { something: string };

  const createPromise1 = (): Promise<Something> => {
    return new Promise<Something>((resolve, reject) => {
      const data: Something = { something: "something" };

      if (data) {
        resolve(data);
      } else {
        reject("Fail to load data");
      }
    });
  };

  //calling the function
  const showData1 = async (): Promise<Something> => {
    const data: Something = await createPromise1();
    // console.log(data);
    return data;
  };

  showData1();

  //
}
