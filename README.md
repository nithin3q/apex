# `Scenario and Vehicle Management App`

## About the project

This project directory contains an end-to-end CRUD application built with ReactJS. Users can manage scenarios and vehicles, with each scenario capable of having multiple vehicles. Users can perform operations such as creating, reading, updating, and deleting scenarios and vehicles.
When a scenario is deleted, all associated vehicles will also be removed.

## Key Features
- Scenarios: Manage scenarios with unique IDs, names, and durations.
- Vehicles: Manage vehicles with unique IDs, names, initial positions (X and Y), speed, direction (Towards, Backwards, Upwards, and Downwards), and color.
- Simulation: Start a simulation where vehicles move based on their parameters until the scenario time is over.

The Vehicle have following fields:
- Vehicle id
- Vehicle name
- Initial Position X
- Initial Position Y
- Speed 
- Direction (can have only Towards, Backwards, Upwards and Downwards).
- colour

json-server is used for storing data use.


## Live project link

https://apex-five-swart.vercel.app/

## `Tools Used`

### FRONTEND
- React
- CSS
- Framer motion
### BACKEND
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
4.cd server

```
npm install

```

5.start server
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
