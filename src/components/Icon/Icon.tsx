import Add from '@mui/icons-material/Add';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AddShoppingCart from '@mui/icons-material/AddShoppingCart';
import ArrowBack from '@mui/icons-material/ArrowBack';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ArrowDropDown from '@mui/icons-material/ArrowDropDown';
import ArrowDropUp from '@mui/icons-material/ArrowDropUp';
import ArrowForward from '@mui/icons-material/ArrowForward';
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos';
import AutoAwesome from '@mui/icons-material/AutoAwesome';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import Cancel from '@mui/icons-material/Cancel';
import Check from '@mui/icons-material/Check';
import CheckCircle from '@mui/icons-material/CheckCircle';
import ChevronLeft from '@mui/icons-material/ChevronLeft';
import ChevronRight from '@mui/icons-material/ChevronRight';
import Circle from '@mui/icons-material/Circle';
import Clear from '@mui/icons-material/Clear';
import Close from '@mui/icons-material/Close';
import CreditCard from '@mui/icons-material/CreditCard';
import CreditCardOff from '@mui/icons-material/CreditCardOff';
import CreditScore from '@mui/icons-material/CreditScore';
import Delete from '@mui/icons-material/Delete';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import DeleteOutline from '@mui/icons-material/DeleteOutline';
import Done from '@mui/icons-material/Done';
import DownloadIcon from '@mui/icons-material/Download';
import Edit from '@mui/icons-material/Edit';
import Error from '@mui/icons-material/Error';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Facebook from '@mui/icons-material/Facebook';
import FactCheck from '@mui/icons-material/FactCheck';
import Feedback from '@mui/icons-material/FeedbackOutlined';
import FilterList from '@mui/icons-material/FilterList';
import GetApp from '@mui/icons-material/GetApp';
import Group from '@mui/icons-material/Group';
import GroupWork from '@mui/icons-material/GroupWork';
import HomeIcon from '@mui/icons-material/Home';
import Info from '@mui/icons-material/Info';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Instagram from '@mui/icons-material/Instagram';
import LinkedIn from '@mui/icons-material/LinkedIn';
import LocalShipping from '@mui/icons-material/LocalShipping';
import Logout from '@mui/icons-material/Logout';
import Menu from '@mui/icons-material/Menu';
import MoreHoriz from '@mui/icons-material/MoreHoriz';
import MoreVert from '@mui/icons-material/MoreVert';
import NotificationsNone from '@mui/icons-material/NotificationsNone';
import Person from '@mui/icons-material/Person';
import ProductionQuantityLimits from '@mui/icons-material/ProductionQuantityLimits';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import Remove from '@mui/icons-material/Remove';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import Search from '@mui/icons-material/Search';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import Star from '@mui/icons-material/Star';
import StarBorder from '@mui/icons-material/StarBorder';
import Timelapse from '@mui/icons-material/Timelapse';
import Twitter from '@mui/icons-material/Twitter';
import ViewArrayIcon from '@mui/icons-material/ViewArray';
import ViewColumnIcon from '@mui/icons-material/ViewColumn';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Warehouse from '@mui/icons-material/Warehouse';
import YoutubeSearchedForIcon from '@mui/icons-material/YoutubeSearchedFor';
import type { SvgIconProps } from '@mui/material/SvgIcon/SvgIcon';

/** Add imported icon to this object. */
const muiIcons = {
  Close,
  ExpandMore,
  FilterList,
  Add,
  Remove,
  Group,
  FactCheck,
  Warehouse,
  ArrowForward,
  ArrowBack,
  MoreHoriz,
  ArrowDropDown,
  ArrowDropUp,
  Circle,
  Clear,
  GroupWork,
  Timelapse,
  Star,
  Info,
  Person,
  Menu,
  ChevronLeft,
  ChevronRight,
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
  ShoppingCart,
  Search,
  Done,
  Cancel,
  Check,
  CheckCircle,
  Error,
  YoutubeSearchedForIcon,
  Visibility,
  VisibilityOff,
  ExpandLess,
  Delete,
  DeleteOutline,
  InfoOutlinedIcon,
  MoreVert,
  ArrowForwardIos,
  LocalShipping,
  Edit,
  NotificationsNone,
  Logout,
  GetApp,
  StarBorder,
  CreditScore,
  AddShoppingCart,
  AutoAwesome,
  ProductionQuantityLimits,
  DownloadIcon,
  ViewColumnIcon,
  ViewArrayIcon,
  Feedback,
  CreditCard,
  CreditCardOff,
  AddCircleOutlineIcon,
  ArrowCircleUpIcon,
  ArrowCircleDownIcon,
  HomeIcon,
  RadioButtonCheckedIcon,
  RemoveCircleIcon,
  DeleteForeverIcon,
  AutoGraphIcon
};

/** Type defs. */
type IconProps = SvgIconProps & {
  name: keyof typeof muiIcons;
};

/** Main function. */
export function Icon(props: IconProps) {
  const MuiIcon = muiIcons[props.name];

  return <MuiIcon {...props} />;
}

/** Exports. */
export { muiIcons };
export type { IconProps };
