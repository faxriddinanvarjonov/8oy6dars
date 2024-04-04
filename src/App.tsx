import { useRef, useState } from "react";

function App() {
  let Name: any = useRef("");
  let Phone: any = useRef(0);
  let [arr, setArr]: (object | null | string)[] = useState(
    localStorage.getItem("arr") ? JSON.parse(localStorage.getItem("arr")) : []
  );
  console.log(arr);

  interface ObjType {
    Name: string;
    Phone: number;
  }

  let obj: ObjType;

  function HandleSubmit(e: any) {
    e.preventDefault();
    obj = {
      Name: Name.current.value,
      Phone: Phone.current.value,
    };
    console.log(obj);
    arr.push(obj);
    localStorage.setItem("arr", JSON.stringify(arr));
    console.log(arr);
  }

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Add contact!</h1>
            <p className="py-6">
              Enter phone number, name, surname to add contact! all inputs arr
              required
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={HandleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  ref={Name}
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone number</span>
                </label>
                <input
                  ref={Phone}
                  type="number"
                  placeholder="Phone number"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Add contact</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <p className="text-xl text-center text-white py-5">Contacts:</p>
      {arr.map((prod, index) => {
        return (
          <div
            className="flex justify-center items-center bg-blue-600 max-w-[500px] mx-auto rounded-xl my-5 py-5 gap-5 text-white"
            key={index}
          >
            <div>Name: {prod.Name}</div>
            <div>Phone: {prod.Phone}</div>
          </div>
        );
      })}
    </>
  );
}

export default App;
