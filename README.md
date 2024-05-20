# `Scenario And Vehicle CRUD App`

## About the project

In this project directory, there is an end-to-end CRUD application made with ReactJS. Users can add scenarios and vehicles, and each scenario can have multiple vehicles. Users can read, create, update, and delete scenarios and vehicles. When a scenario is deleted, all vehicles under it will also be deleted.

The application can create, display, update, and delete scenarios and vehicles. A scenario can have multiple vehicles, and vehicles will move when the user clicks a button based on the scenario and vehicle parameters.

On the Home page, users can select the scenarios they have created and start the simulation. When the user clicks the play button, vehicles starts moving based on the direction and speed until the scenario time is over.

The scenario have following fields:
- Scenario id
- Scenario name
- Time

The Vehicle have following fields:
- Vehicle id
- Vehicle name
- Initial Position X
- Initial Position Y
- Speed 
- Direction (can have only Towards, Backwards, Upwards and Downwards).
- colour

json-server is used for storing data use.

For animation I have used Framer motion library.

## Live project link

https://apex-five-swart.vercel.app/

## `Tools Used`

### FRONTEND
- React
- CSS
- Framer motion
### BACKEND
- npm install
- json server

# Installation
1. Clone the repository:

```
git clone https://github.com/nithin3q/apex.git
```

2. Install dependencies:
Navigate to the project directory:
```
cd folder-name
```

3. Install frontend dependencies:

```
npm install
```
3. start the frontend:
```

npm run start
```
## Project Structure
Home Page: Select scenarios and start simulations.
Scenario Management: Create, read, update, and delete scenarios.
Vehicle Management: Create, read, update, and delete vehicles under each scenario.
## Usage
Create a Scenario: Navigate to the scenario creation form, enter the scenario details, and submit.
Add Vehicles to Scenario: After creating a scenario, navigate to the vehicle management section to add vehicles.
Start Simulation: On the home page, select a scenario and start the simulation. Vehicles will move based on their defined parameters.
Notes
The application uses json-server to simulate a REST API. Ensure json-server is running before interacting with the app.
For animations, Framer Motion library is used to provide smooth transitions and movements for the vehicles.
