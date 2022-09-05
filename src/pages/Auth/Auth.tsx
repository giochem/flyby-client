import { useMutation } from "@apollo/client";
import { useEffect, useState } from "react";
import { LOGIN, NEW_TOURIST } from "../../queries";
import "./Auth.scss";

interface Account {
  email: string;
  password: string;
  phone: string;
}

function Auth() {
  const [loginAccount, { data, loading, error }] = useMutation(LOGIN);
  const [newTourist, { data: dataNewTourist, loading: loadingNewTourist, error: errorNewTourist }] =
    useMutation(NEW_TOURIST);
  const [login, setLogin] = useState(true);
  const [form, setForm] = useState<Account>({
    email: "",
    password: "",
    phone: "",
  });
  const [toast, setToast] = useState("");
  useEffect(() => {
    if (loading || loadingNewTourist) {
      setToast("Loading...");
    }

    if (error) {
      setToast(JSON.stringify(error, null, 2));
    }
    if (errorNewTourist) {
      setToast(JSON.stringify(errorNewTourist, null, 2));
    }
    if (data) {
      if (!data.login.success) {
        setToast(data.login.message);
      }
      if (data.login.success) {
        localStorage.setItem("token", data.login.token);
        setToast("Success");
      }
      window.location.reload();
    }

    if (dataNewTourist) {
      if (!dataNewTourist.newTourist.success) {
        setToast(dataNewTourist.newTourist.message);
      }
      if (dataNewTourist.newTourist.success) {
        localStorage.setItem("token", dataNewTourist.newTourist.token);
        setToast("Success");
      }
      window.location.reload();
    }
  }, [data, dataNewTourist, loading, loadingNewTourist, error, errorNewTourist]);
  // logic
  const toggle = () => {
    setLogin(!login);
  };
  const handleChange = (option: string) => (e: any) => {
    setForm({ ...form, [option]: e.target.value });
  };
  const sendAccount = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { phone, ...specs } = form;
    if (login) {
      loginAccount({ variables: { account: specs } });
    } else {
      newTourist({ variables: { account: { phone: +phone, ...specs } } });
    }
    setForm({
      email: "",
      password: "",
      phone: "",
    });
  };
  return (
    <div className="Auth">
      <div className="title">
        <h3>{login ? "Login" : "Sign up"}</h3>
        <div className="toggle">
          {login ? (
            <p>
              Not account <span onClick={toggle}>Sign up</span>
            </p>
          ) : (
            <p>
              Have account <span onClick={toggle}>Login</span>
            </p>
          )}
        </div>
      </div>
      <form className="form" onSubmit={sendAccount}>
        <input className="input" type="email" value={form.email} onChange={handleChange("email")} placeholder="Email" />
        {login ? (
          <p></p>
        ) : (
          <input
            value={form.phone}
            type="number"
            onChange={handleChange("phone")}
            className="input"
            placeholder="Phone"
          />
        )}
        <input
          value={form.password}
          onChange={handleChange("password")}
          className="input"
          type="password"
          placeholder="Password"
        />
        <div className="toast">{toast}</div>
        <button className="button">Submit</button>
      </form>
    </div>
  );
}
export default Auth;
