import { BiRadioCircle } from 'react-icons/bi';
import { LuMoreHorizontal } from 'react-icons/lu';
import { TbProgress } from 'react-icons/tb';
import { IoCheckmarkDoneCircle } from 'react-icons/io5';
import { AiFillCloseCircle, AiFillWarning } from 'react-icons/ai';
import { BiSignal2, BiSignal3, BiSignal4 } from 'react-icons/bi';

export const fetchPriorityIcon = (priority) => {
  switch (priority) {
    case 'No priority':
      return <LuMoreHorizontal color="#797d84" size={14} />;
    case 'Low':
      return <BiSignal2 color="#6b6f76" size={14} />;
    case 'Medium':
      return <BiSignal3 color="#6b6f76" size={14} />;
    case 'High':
      return <BiSignal4 color="#6b6f76" size={14} />;
    case 'Urgent':
      return <AiFillWarning color="#fc7840" size={14} />;
    default:
      return <AiFillWarning color="#fc7840" size={14} />;
  }
};

export const fetchStatusIcon = (status) => {
  switch (status) {
    case 'Backlog':
    case 'Todo':
      return <BiRadioCircle color="#e2e2e2" size={24} />;
    case 'In progress':
      return <TbProgress color="#f1ca4b" size={16} />;
    case 'Done':
      return <IoCheckmarkDoneCircle color="#5e6ad2" size={16} />;
    case 'Canceled':
      return <AiFillCloseCircle color="#94a2b3" size={16} />;
    default:
      return <AiFillCloseCircle color="#94a2b3" size={16} />;
  }
};

export const organizeTicketsByStatus = (tickets) => {
  return tickets.reduce(
    (acc, ticket) => {
      if (!acc[ticket.status]) acc[ticket.status] = [];
      acc[ticket.status].push(ticket);
      return acc;
    },
    { Backlog: [], Todo: [], 'In progress': [], Done: [], Canceled: [] }
  );
};

export const organizeTicketsByPriority = (tickets) => {
  return tickets.reduce(
    (acc, ticket) => {
      const priorityLabel = getPriorityLabel(ticket.priority);
      if (!acc[priorityLabel]) acc[priorityLabel] = [];
      acc[priorityLabel].push(ticket);
      return acc;
    },
    { 'No priority': [], Low: [], Medium: [], High: [], Urgent: [] }
  );
};

export const organizeTicketsByUser = (tickets) => {
  return tickets.reduce((acc, ticket) => {
    if (!acc[ticket.userId]) acc[ticket.userId] = [];
    acc[ticket.userId].push(ticket);
    return acc;
  }, {});
};

export const mapUsersById = (users) => {
  return users.reduce((acc, user) => {
    acc[user.id] = user;
    return acc;
  }, {});
};

const getPriorityLabel = (priorityValue) => {
  switch (priorityValue) {
    case 0:
      return 'No priority';
    case 1:
      return 'Low';
    case 2:
      return 'Medium';
    case 3:
      return 'High';
    case 4:
      return 'Urgent';
    default:
      return 'NA';
  }
};

const sortByPriority = (tickets) => tickets.sort((a, b) => b.priority - a.priority);
const sortByTitle = (tickets) => tickets.sort((a, b) => a.title.localeCompare(b.title));

export const prepareGridData = (tickets, category, sortOrder) => {
  const sortedTickets = sortOrder === 'priority' ? sortByPriority(tickets) : sortByTitle(tickets);

  switch (category) {
    case 'status':
      return organizeTicketsByStatus(sortedTickets);
    case 'priority':
      return organizeTicketsByPriority(sortedTickets);
    case 'user':
      return organizeTicketsByUser(sortedTickets);
    default:
      return organizeTicketsByUser(sortedTickets);
  }
};
