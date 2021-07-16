import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Page from './pages/Page';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App = () => {

	const pages = [

		{
			label: "All",
			url: "/overlay/all",
			component: ""
		},
		{
			label: "Action Sheet",
			url: "/overlay/action-sheet",
			component: ""
		},
		{
			label: "Alert",
			url: "/overlay/alert",
			component: ""
		},
		{
			label: "Loading",
			url: "/overlay/loading",
			component: ""
		},
		{
			label: "Modal",
			url: "/overlay/modal",
			component: ""
		},
		{
			label: "Picker",
			url: "/overlay/picker",
			component: ""
		},
		{
			label: "Popover",
			url: "/overlay/popover",
			component: ""
		},
		{
			label: "Toast",
			url: "/overlay/toast",
			component: ""
		}
	];
	
	return (
		<IonApp>
			<IonReactRouter>
				<IonSplitPane contentId="main">
					<Menu />
					<IonRouterOutlet id="main">
						<Route path="/" exact={true}>
							<Redirect to="/overlay/all" />
						</Route>

						{ pages.map((page, index) => {

							const pageComponent = page.component;

							return (

								<Route path={ page.url } exact={ true }>
									<pageComponent />
								</Route>
							);
						})}
					</IonRouterOutlet>
				</IonSplitPane>
			</IonReactRouter>
		</IonApp>
	);
};

export default App;