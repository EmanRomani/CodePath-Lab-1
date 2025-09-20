import Event from './Event';

const Calendar = () => {
    return(
        <>
        <table>
            {/* Header */}
            <thead>
                <th></th>
                <th>Sunday</th>
                <th>Monday</th>
                <th>Tuesday</th>
                <th>Wednesday</th>
                <th>Thursday</th>
                <th>Friday</th>
                <th>Saturday</th>
            </thead>
            {/*Sunday*/}
            <tr>
                <td className="time">8am</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>

            <tr>
                <td className="time">9am</td>
                <td><Event event='Church ⛪' color='purple'/></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>

            <tr>
                <td className="time">10am</td>
                <td><Event color="life" event="Basketball Practice" /></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>

            <tr>
                <td className="time">11am</td>
                <td><Event color="life" event="Basketball Practice" /></td>
                <td><Event event="Data Structures 💻" color="lavender"/></td>
                <td></td>
                <td><Event event="Data Structures 💻" color="lavender"/></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>

            <tr>
                <td className="time">12am</td>
                <td></td>
                <td></td>
                <td><Event color="lavender" event="CS Homework Due" /></td>
                <td></td>
                <td><Event color="lavender" event="CS Homework Due" /></td>
                <td></td>
                <td></td>
            </tr>

            <tr>
                <td className="time">1pm</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td><Event color="peach" event="Anime Club Meeting" /></td>
                <td></td>
                <td></td>
            </tr>

            <tr>
                <td className="time">2pm</td>
                <td></td>
                <td><Event event="Gym 🏋️" color="life"/></td>
                <td></td>
                <td><Event event="Gym 🏋️" color="life"/></td>
                <td></td>
                <td><Event event="Gym 🏋️" color="life"/></td>
                <td></td>
            </tr>

            <tr>
                <td className="time">3pm</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td><Event color="gold" event="Hackathon Prep" /></td>
                <td><Event color="gold" event="Hackathon Prep" /></td>
            </tr>

            <tr>
                <td className="time">4pm</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td><Event color="gold" event="Hackathon Prep" /></td>
                <td><Event color="gold" event="Hackathon Prep" /></td>
            </tr>

            <tr>
                <td className="time">5pm</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </table>
        </>
    )
}

export default Calendar;