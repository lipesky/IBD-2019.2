import React from 'react';
import './App.css';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import {
  Drawer,
  Grid,
  Button,
  AppBar,
  Avatar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  Hidden,
  Container
} from '@material-ui/core';
import {
  Visibility,
  VisibilityOff,
  AccountCircle,
  ExpandMore,
  ExpandLess
} from '@material-ui/icons';
import user_profile_foto from './img/luscas.png';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const drawer_width = 300;

const styles = makeStyles(theme => ({
	toolbar: theme.mixins.toolbar,
	userProfileFoto :{
		//margin: 10
	},
	userProfileFotoAvatar :{
		//width: 60,
		//height: 60
	},
	menu_toolbar_title:{
		flexGrow:1
	},
	menu_list:{
		width: drawer_width
	},
	menu_subitem:{
		width: '90%',
		marginLeft: '10%'
	},
	toolbar_user_info:{
		textAlign: 'left'
	},
	drawer:{
		width: drawer_width
	},
	AppBar:{
		width: 'calc(100% - '+ (window.innerWidth >= 768 ? drawer_width : 0) +'px)',
		marginRight: window.innerWidth >= 768 ? drawer_width : 0
	}
}));

function getListItem(item, index, fclick, subitem = false){

		const classes = styles();

		const handle_click = (function(){
			if(item.menu !== undefined){
				var new_menu_item = {...item}
				new_menu_item.openned = !item.openned;
				fclick(new_menu_item, index);
			}
		});
		return (
			<React.Fragment key={item.text} >
				<Link to={item.link}>
					<ListItem 
						button 
						key={item.text} 
						onClick={handle_click}
						className={subitem ? classes.menu_subitem : ''}>
						{
							item.icon ? <ListItemIcon></ListItemIcon> : undefined	
						}
						<ListItemText>{item.text}</ListItemText>
						{item.menu !== undefined ? (item.openned === true ? <ExpandLess /> : <ExpandMore />) : undefined}
					</ListItem>
				</Link>
				{
					item.menu !== undefined ? (
					<Collapse in={item.openned === true} timeout="auto" unmountOnExit>
						<List disablePadding>
							{
								item.menu.map((value, index) => 
									getListItem(value, index, fclick, true))
							}
						</List>
					</Collapse>
					) : undefined }
			</React.Fragment>);
}

function FMenu(props){
	const [menu_openned, set_menu_openned] = React.useState(false);
	const [menu_list, set_menu_list] = React.useState([...props.menu]);
	const { container } = props;

	const classes = styles();
	const drawer_variant = window.innerWidth >= 768 ? 'permanent' : 'temporary';

	const handle_menu_item_click = (function(item, index){
		var menu = [...props.menu];
		menu[index] = item;
		set_menu_list(menu);
	});
	const menu_change = (function(){
		set_menu_openned(!menu_openned);
	});
	return (
		<React.Fragment>
		 <AppBar
	        position="fixed"
	        className={classes.AppBar}
	      >
	      	<Toolbar className={classes.menu_toolbar}>
	      		<Hidden xsUp>
		      		<IconButton className={classes.userProfileFoto}>
		      			<Avatar 
		      				className={classes.userProfileFotoAvatar}
		      				edge="end" 
		      				alt="Nome do usuario" 
		      				src={user_profile_foto} />
		      		</IconButton>
	      		</Hidden>
	      		<Box className={classes.menu_toolbar_title}>
	      			<Grid>
	      				<Grid item sm={3}>
		      				<Typography
		      					className={classes.toolbar_user_info}
		      					sm={12}
		      					>User Name</Typography>
		      			</Grid>
		      			<Typography>
		      				Runeterra
		      			</Typography>
	      			</Grid>
	      		</Box>
	      		<Hidden mdUp>
	      			<IconButton
	      			edge="start" 
	      			color="inherit" 
	      			aria-label="menu"
	      			onClick={menu_change}>

	            	<MenuIcon />

	          		</IconButton>
	      		</Hidden>
	      	</Toolbar>
	      	<nav classe={classes.drawer}>
		      	<Drawer
		      		container={container}
		      		open={menu_openned}
		      		onClose={menu_change}
		      		anchor="right"
		      		variant={drawer_variant}
		      		classes={{ paper: classes.drawer}}
		      		ModalProps={{
		              keepMounted: true, // Better open performance on mobile.
		            }}		      		>
		      		<List
		      			className={classes.menu_list} >
		      			{
		      				menu_list.map(
		      					(value, index) =>
		      						getListItem(value, index, handle_menu_item_click)
		      						)
		      			}
		      		</List>
		      	</Drawer>
		    </nav>
	      </AppBar>
	      <div className={classes.toolbar}></div>
	    </React.Fragment>
		);
}

export default FMenu;