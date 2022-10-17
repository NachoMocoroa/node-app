import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LOGIN, LOGOUT, NODES } from './Routes/paths';
import { AuthProvider } from './contexts/auth';
import PrivateRoute from './Routes/router/PrivateRoute';
import PublicRoute from './Routes/router/PublicRoute';
import Home from './components/Home';
import Login from './components/Login';
import Logout from './components/Logout';
import Nodes from './components/Nodes';

const App = () => (
	<AuthProvider>
		<BrowserRouter>
			<Routes>
				<Route path={NODES} element={<PrivateRoute />}>
					<Route path={NODES} element={<Nodes />} />
					<Route path={LOGOUT} element={<Logout />} />
				</Route>
				<Route path="/" element={<PublicRoute />}>
					<Route index element={<Home />} />
					<Route path={LOGIN} element={<Login />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</AuthProvider>
);

export default App;
