import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import {NavLink} from 'react-router-dom';

import {
  DashboardRounded,
  FiberNew,
  Language,
  CloudDone,
  TableChart, 
  Person,
  Assignment,
  ViewColumn
} from "@material-ui/icons";
import { blue } from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  },
  stitle: {
    textTransform: "uppercase",
    fontSize: "12px",
    textAlign: "center",
    display: "block"
  },
  list: {
    paddingLeft: '10px',
  },
  list2: {
    '&:hover': {
      backgroundColor: '#ccc'
    }
  },
  navLink: {
    color: 'inherit',
    textDecoration: 'none',
    minWidth: '90%',
  },
  active: {
    backgroundColor: blue[200]
  }
  
}));

const Sidebar = props => {
  let { sidebar } = props;
  const classes = useStyles();
  let iconMap = {
    dashboard: <DashboardRounded />,
    fibernew: <FiberNew />,
    tablechart: <TableChart />,
    language: <Language />,
    clouddone: <CloudDone />,
    person: <Person />,
    assignment: <Assignment />,
    viewcolumn: <ViewColumn />
  };

  const renderList = item => {
    return item.subItems.map(sub => (
      <NavLink 
      key={sub.id}
      className={classes.navLink} 
      activeClassName={classes.active} 
      exact={sub.id === 'overview'? true: false}
      to={
        sub.id === 'overview'? 
        '/'
        :
        `/${sub.title.toLowerCase().split(' ').join('-')}`
      }>
      <ListItem button className={classes.list}>
        <ListItemIcon>
          {iconMap[sub.icon]}
        </ListItemIcon>
        <ListItemText primary={sub.title}/>
      </ListItem>
      </NavLink>
    ))
  }

  return sidebar.map(el => (
    <List key={el.id}>
      <span className={classes.stitle}>{el.title}</span>
      <ListItem key={el.title}>
        <div style={{display: 'flex',flexDirection: 'column'}}>
          {renderList(el)}
        </div>
      </ListItem>
    </List>
  ));
};

const mapStateToProps = state => ({
  sidebar: state.util.sidebarItem
});

export default connect(mapStateToProps)(Sidebar);
