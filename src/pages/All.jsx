import { IonButtons, IonCard, IonCardHeader, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonCardTitle, IonCardSubtitle, IonCardContent, IonText } from '@ionic/react';

const All = () => {

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot="start">
						<IonMenuButton />
					</IonButtons>
					<IonTitle>All</IonTitle>
				</IonToolbar>
			</IonHeader>

			<IonContent fullscreen>
				<IonHeader collapse="condense">
					<IonToolbar>
						<IonTitle size="large">All</IonTitle>
					</IonToolbar>
				</IonHeader>

				<IonCard>
					<IonCardHeader>
						<IonCardSubtitle>Sample usage</IonCardSubtitle>
						<IonCardTitle>Overlay Hooks</IonCardTitle>
					</IonCardHeader>

					<IonCardContent>
						<IonText>
							<p>
								In Ionic React 5.6, the team packaged up a new set of hooks for controlling overlay components that they thought we might like. What is an overlay you ask? It’s the term that Ionic give components that display over your current content, such as alerts, modals, toasts, etc.
							</p>
						</IonText>
						<br />
						<IonText>
							<p>
								All of the code is taken from the Ionic Framework docs. You can find the blog post outlining these new overlay hooks <a href="https://ionicframework.com/blog/introducing-the-new-overlay-hooks-for-ionic-react/" target="_blank" rel="noreferrer">here.</a>
							</p>
						</IonText>
						<br />
						<IonText>
							<p>
								Check out the samples by navigating to a respective one in the side menu.
							</p>
						</IonText>
					</IonCardContent>
				</IonCard>
			</IonContent>
		</IonPage>
	);
};

export default All;