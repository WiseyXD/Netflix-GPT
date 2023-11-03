import { useFormik } from "formik";
import { loginSchema } from "../schemas";
import { useFirebase } from "../Context/firebase";
import { useState } from "react";

export default function Login({ isLogin, setIsLogin, handleLogin }) {
	const firebase = useFirebase();
	console.log(firebase);
	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		validationSchema: loginSchema,
		onSubmit: (values) => {
			firebase.loginWithEmailAndPassword(values.email, values.password);
			console.log(values);
		},
	});

	return (
		<div className="flex justify-center items-center">
			<form
				className="form-control w-full max-w-md bg-black px-7 py-7 opacity-90"
				onSubmit={formik.handleSubmit}
			>
				<h1 className="text-4xl font-semibold text-center text-white mb-4">
					Login
				</h1>
				<div className="flex flex-col">
					<label className="label">
						<span className="label-text">Email or Username</span>
					</label>
					<input
						type="text"
						placeholder="Valid Email"
						className="input input-bordered w-full max-w-md"
						id="loginEmail"
						name="email"
						onChange={formik.handleChange}
						value={formik.values.email}
						onBlur={formik.handleBlur}
					/>
					{formik.errors.email && (
						<label className="label">
							<span className="label-text-alt text-red-500">
								{formik.errors.email}
							</span>
						</label>
					)}
					<label className="label">
						<span className="label-text">Password</span>
					</label>
					<input
						type="password"
						placeholder="Password"
						className="input input-bordered w-full max-w-md"
						id="LoginPassword"
						name="password"
						onChange={formik.handleChange}
						value={formik.values.password}
						onBlur={formik.handleBlur}
					/>
					{formik.errors.password && (
						<label className="label">
							<span className="label-text-alt text-red-500">
								{formik.errors.password}
							</span>
						</label>
					)}
					<button
						className="btn btn-xs sm:btn-sm md:btn-md bg-red-600 text-white mt-4"
						type="submit"
					>
						Sign In
					</button>
					<br />
					<label className="label">
						<span className="label-text text-base">
							New to <span className="text-red-500">Netflix</span>
							?
							<a
								className="link ml-2 text-white"
								onClick={() => handleLogin()}
							>
								Sign up
							</a>
						</span>
					</label>
				</div>
			</form>
		</div>
	);
}
