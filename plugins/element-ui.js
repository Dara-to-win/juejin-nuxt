import Vue from 'vue'
import {
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Button,
    Backtop,
    FormItem,
    Input,
    Form,
    Row,
    Col,
    Menu,
    MenuItem,
    Link,
    Badge,
    Popover,
    Submenu,
    SkeletonItem,
    Skeleton,
    Avatar,
} from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
 
const components = [
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Button,
    Backtop,
    FormItem,
    Input,
    Form,
    Row,
    Col,
    Menu,
    MenuItem,
    Link,
    Badge,
    Popover,
    Submenu,
    SkeletonItem,
    Skeleton,
    Avatar,
];
 
const Element = {
 install (Vue) {
 components.forEach(component => {
  Vue.component(component.name, component)
 })
 }
}
 
Vue.use(Element, { locale })