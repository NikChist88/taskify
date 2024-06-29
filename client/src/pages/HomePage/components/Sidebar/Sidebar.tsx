import { IoStar, IoTime, IoToday, IoCheckmarkDoneCircle } from 'react-icons/io5'
import { MdDelete, MdPriorityHigh } from 'react-icons/md'
import './styles.scss'

export const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div>All Tasks</div>
      <ul className="sidebarList">
        <h3>Filters</h3>
        <li className="sidebarItem">
          <IoStar color="#8597A7" />
          Starred
        </li>
        <li className="sidebarItem">
          <MdPriorityHigh color="#8597A7" />
          Priority
        </li>
        <li className="sidebarItem">
          <IoTime color="#8597A7" />
          Sheduled
        </li>
        <li className="sidebarItem">
          <IoToday color="#8597A7" />
          Today
        </li>
        <li className="sidebarItem">
          <IoCheckmarkDoneCircle color="#8597A7" />
          Done
        </li>
        <li className="sidebarItem">
          <MdDelete color="#8597A7" />
          Deleted
        </li>
      </ul>
    </aside>
  )
}
