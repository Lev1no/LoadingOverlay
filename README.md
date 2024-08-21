# LoadingOverlay

Thanks for staring!

This is a simple React web application that implements a countdown timer with a customizable start time. The timer can be controlled using Play, Pause, Reset, and Add 30 seconds buttons. The timer's progress is displayed as a loading bar.

## Features

- Customizable start time (minutes and seconds)
- Play/Pause functionality
- Reset functionality
- Add 30 seconds without pausing
- Visual progress bar indicating time elapsed

## Installation
//ss
1. Clone the repository:
    ```bash
    git clone https://github.com/Lev1no/LoadingOverlay.git
    ```
    
2. Move in to the project directory
   ```bash 
   cd LoadingOverlay
   ```
    
3. Install the dependencies:
    ```bash
    npm install
    ```
     
4. Start the development server:
    ```bash
    npm start
    ```
    
5. Open your browser and navigate to:
    ```
    http://localhost:3005
    ```

## Usage

1. **Custom Time Input**: 
   - Enter the desired minutes and seconds in the input fields.
   - Note: The inputs are disabled while the timer is running.

2. **Controls**:
   - **Play/Pause**: Click to start or pause the timer.
   - **Reset**: Click to reset the timer to the custom input time.
   - **+30s**: Click to add 30 seconds to the current timer without pausing.

3. **Progress Bar**:
   - The progress bar will fill up as time elapses, indicating the remaining time proportionally.

## Project Structure

- `src/`
  - `App.js`: The main app component.
  - `index.js`: Entry point of the application.
  - `Timer.js`: Timer component implementing the main functionality.
  - `App.css`: Styling for the app component.
  - `Timer.css`: Styling for the timer component.

## Code Highlights

- The `Timer` component maintains the timer state, handles user input, and manages the timer controls.
- The `useEffect` hook is used to manage the timer countdown.
- Dynamic calculation of the progress bar width based on the remaining time.

## Customization

- The timer's initial time is set to 15 minutes by default. You can change this by modifying the initial state in the `Timer` component.
- Styling can be adjusted by modifying `App.css` and `Timer.css`.

## License

This project is licensed under the MIT License.
