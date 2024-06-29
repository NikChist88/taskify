import { FaTasks } from 'react-icons/fa'
import { IoStar, IoTime, IoToday, IoCheckmarkDoneCircle } from 'react-icons/io5'
import { MdDelete, MdPriorityHigh } from 'react-icons/md'
import { labels } from './constants/labels'
import { AddTaskModal } from '../AddTaskModal'
import './styles.scss'

const filters = [
  {
    id: 1,
    title: 'Starred',
    icon: (
      <IoStar
        size={'18px'}
        color="#8597A7"
      />
    ),
  },
  {
    id: 2,
    title: 'Priority',
    icon: (
      <MdPriorityHigh
        size={'18px'}
        color="#8597A7"
      />
    ),
  },
  {
    id: 3,
    title: 'Sheduled',
    icon: (
      <IoTime
        size={'18px'}
        color="#8597A7"
      />
    ),
  },
  {
    id: 4,
    title: 'Today',
    icon: (
      <IoToday
        size={'18px'}
        color="#8597A7"
      />
    ),
  },
  {
    id: 5,
    title: 'Done',
    icon: (
      <IoCheckmarkDoneCircle
        size={'18px'}
        color="#8597A7"
      />
    ),
  },
  {
    id: 6,
    title: 'Deleted',
    icon: (
      <MdDelete
        size={'18px'}
        color="#8597A7"
      />
    ),
  },
]

export const Sidebar = () => {
  return (
    <aside className="sidebar">
      <AddTaskModal />
      <div className="sidebarItem">
        <FaTasks
          size={'18px'}
          color="#8597A7"
        />
        All Tasks
      </div>
      <h3 className="listTitle listTitle_filters">Filters</h3>
      <ul className="sidebarList">
        {filters.map((filter) => (
          <li
            className="sidebarItem"
            key={filter.id}
          >
            {filter.icon}
            {filter.title}
          </li>
        ))}
      </ul>
      <h3 className="listTitle">Labels</h3>
      <ul className="labelsList">
        {labels.map((label) => (
          <li
            className={`labelsItem labelsItem_${label.color}`}
            key={label.id}
          >
            {label.title}
          </li>
        ))}
      </ul>
    </aside>
  )
}
