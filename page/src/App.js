import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import Modal from 'react-modal';
import RefProvider from './_useRefHook';
import Home from './components/Home/Home';
import Electricos from './components/Productos/Electricos';
import Electronicos from './components/Productos/Electronicos';
import Industriales from './components/Productos/Industriales';
import Domotica from './components/Productos/Domotica';

import Chat from './components/Chat/Chat';
import ChatProv from './_useChat';

const client = new ApolloClient({
	uri: 'https://api.maxpower-ar.com/graphql',
});

Modal.setAppElement('#root');

function App() {
	return (
		<ApolloProvider client={client}>
			<BrowserRouter>
				<Switch>
					<RefProvider>
						<ChatProv>
							{/* <Route component={Chat} path="/" exact /> */}
							<Route component={Home} path="/" exact />
							<Route component={Electricos} path="/productos-electricos" exact />
							<Route component={Electronicos} path="/productos-electronicos" exact />
							<Route component={Industriales} path="/productos-industriales" exact />
							<Route component={Domotica} path="/productos-domotica" exact />
						</ChatProv>
					</RefProvider>
				</Switch>
			</BrowserRouter>
		</ApolloProvider>
	);
}

export default App;
