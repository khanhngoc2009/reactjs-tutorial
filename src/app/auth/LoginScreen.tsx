import {
  Button,
  createStyles,
  makeStyles,
  TextField,
  Theme,
} from "@material-ui/core";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { UserInterface } from "../screen/setting/account/Account.props";
import { setToken } from "../service/StorageService";
import { requestLogin } from "./AuthApi";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      flex: 1,
      paddingTop: 120,
    },
    textField: {
      marginLeft: "30%",
      marginRight: "30%",
      marginTop: 20,
      borderColor: "white",
    },
    button: {
      height: 50,
      borderRadius: 20,
      marginLeft: "32%",
      marginRight: "32%",
      marginTop: 20,
    },
    errorContainer: {
      marginLeft: "30%",
      marginRight: "30%",
      marginTop: 7,
    },
    textErr: {
      color: "red",
      fontSize: "12px",
      lineHeight: "22px",
    },
  })
);
interface LoginInterface {
  user_name: string;
  password: string;
}
const initValuesLogin: LoginInterface = {
  password: "",
  user_name: "",
};

const LoginScreen = () => {
  const className = useStyles();
  const navigate = useNavigate();
  const validateLogin = Yup.object({
    user_name: Yup.string()
      .min(2, "Mininum 2 characters")
      .max(15, "Maximum 15 characters")
      .required("Required!"),
    password: Yup.string().min(6, "Minimum 6 characters").required("Required!"),
  });

  const formik = useFormik({
    initialValues: initValuesLogin,
    onSubmit: (value) => {
      handleSubmit(value);
    },
    validationSchema: validateLogin,
  });

  const handleSubmit = async (data: LoginInterface) => {
    try {
      const responseLogin: { data: { data: UserInterface } } =
        await requestLogin(data);
      if (responseLogin) {
        setToken(responseLogin.data.data.token);
        navigate("/");
      }
    } catch (e) {}
  };

  return (
    <div className="px-8 flex flex-col w-full">
      <TextField
        id="filled-required"
        label="user name"
        variant="filled"
        color="primary"
        className={className.textField}
        required={true}
        onChange={formik.handleChange("user_name")}
        onBlur={formik.handleBlur("user_name")}
        error={!!formik.errors.user_name}
        value={formik.values.user_name}
      />
      <div className={className.errorContainer}>
        {formik.errors.user_name && formik.touched.user_name ? (
          <p className={className.textErr}> {formik.errors.user_name}</p>
        ) : null}
      </div>
      <TextField
        id="filled-required"
        label="pass"
        variant="filled"
        color="primary"
        className={className.textField}
        required={true}
        onChange={formik.handleChange("password")}
        onBlur={formik.handleBlur("password")}
        error={!!formik.errors.password}
        value={formik.values.password}
      />
      <div className={className.errorContainer}>
        {formik.errors.password && formik.touched.password ? (
          <p className={className.textErr}> {formik.errors.password}</p>
        ) : null}
      </div>

      <Button
        variant="outlined"
        color="primary"
        onClick={() => formik.handleSubmit()}
        className={className.button}
      >
        Outlined
      </Button>
    </div>
  );
};
export default LoginScreen;
