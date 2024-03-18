This repository contains an Angular application for viewing and managing widgets on a dashboard.

Components
1. Color Picker Component
Purpose:
Allows users to select a color for a widget badge.

Functionality:
Displays a set of color blocks.
User can click on a color block to select it.
Emits an event when a color is selected.

2. Widget Card Component
Purpose:
Represents a widget card on the dashboard.

Functionality:
Displays widget information including action, amount, and type.
Allows linking to a public profile.
Allows setting badge color using the Color Picker Component.
Allows activating or deactivating the widget (when one is activated, the other is deactivated).

3. Widgets Dashboard Component
Purpose:
Displays a dashboard layout for widgets.

Functionality:
Fetches and displays a list of widgets from the server.
Utilizes Widget Card Component to render each widget.
Auto change grid based on screen size.

Services
1. Widget Rest Service
The Widget Rest Service (widget-rest.service) is responsible for fetching widget data from a RESTful API.

2. Active Badge Service
The Active Badge Service (active-badge.service) is responsible for manage one only active card.