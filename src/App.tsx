import { useRef, useState } from "react";

function App() {
  let Name: any = useRef("");
  let Phone: any = useRef(0);
  let local: any = localStorage.getItem("arr");
  let [arr, setArr]: any[] = useState(
    localStorage.getItem("arr") ? JSON.parse(local) : []
  );
  console.log(arr);
  interface Phone {
    Phone: number;
  }

  interface ObjType extends Phone {
    Name: string;
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

  type Point = {
    x: number;
    y: number;
  };

  type Color = "RED" | "GREEN" | "BLUE";

  type style = {
    borderWidth: number;
    color: Color;
  };

  type StyledPoint = Point & style;

  let point: StyledPoint = {
    x: 10,
    y: 10,
    borderWidth: 2,
    color: "BLUE",
  };

  console.log(point);

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left glass p-8 rounded-xl max-w-[384px] lg:max-w-full lg:py-[88px]">
            <h1 className="text-5xl font-bold">Add contact!</h1>
            <p className="px-6 py-6  max-w-[425.6px]">
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
      {arr.map((prod: any, index: any) => {
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
