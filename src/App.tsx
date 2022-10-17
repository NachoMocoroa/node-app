import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LOGIN, LOGOUT, NODES } from './Routes/paths';
import { AuthProvider } from './contexts/auth';
import { NodesProvider } from './contexts/nodes';

const PrivateRoute = React.lazy(() => import('./Routes/router/PrivateRoute'));
const PublicRoute = React.lazy(() => import('./Routes/router/PublicRoute'));
const Home = React.lazy(() => import('./components/Home'));
const Login = React.lazy(() => import('./components/Login'));
const Logout = React.lazy(() => import('./components/Logout'));
const Nodes = React.lazy(() => import('./components/nodes/Nodes'));
const Spinner = React.lazy(() => import('./components/Spinner'));

const App = () => (
	<AuthProvider>
		<NodesProvider>
			<BrowserRouter>
        		<Suspense fallback={<Spinner />}>
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
				</Suspense>
			</BrowserRouter>
		</NodesProvider>
	</AuthProvider>
);

export default App;
