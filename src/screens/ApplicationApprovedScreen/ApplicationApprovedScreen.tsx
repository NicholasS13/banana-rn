import { SpacerInline, Paragraph } from '@elements';

import setAccountToActive from '@util/setAccountToActive';
import React from 'react';
import InfoScreen from '../InfoScreen';

export default ({ id }: { id: string }) => {
	setAccountToActive({ id });

	return (
		<InfoScreen
			title="Your application is approved! (:"
			nextScreenTitle="Start"
			nextScreenDestination="DashboardScreen"
			showBackButton={false}
		>
			<Paragraph fontSize={20}>
        Welcome to the Banana App! We are so excited to have you join our
        family.
			</Paragraph>
			<SpacerInline height={40} />
			<Paragraph emphasized={true} fontSize={20}>
        CLICK "START" TO BEGIN YOUR FIRST DONATION!
			</Paragraph>
		</InfoScreen>
	);
};
