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
  Collapse
} from '@material-ui/core';
import {
  Visibility,
  VisibilityOff,
  AccountCircle,
  ExpandMore,
  ExpandLess
} from '@material-ui/icons';
import user_profile_foto from './img/luscas.png';

const styles = makeStyles(theme => ({
	userProfileFoto :{
		margin: 10
	},
	userProfileFotoAvatar :{
		width: 60,
		height: 60
	},
	menu_toolbar:{
		//display: 'flex',
		//justifyContent: 'space-between'
	},
	menu_toolbar_title:{
		flexGrow:1
	},
	menu_list:{
		width: 350
	},
	menu_subitem:{
		width: '90%',
		marginLeft: '10%'
	},
	toolbar_user_info:{

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
			<React.Fragment>
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

	const classes = styles();

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
		      >
		      	<Toolbar className={classes.menu_toolbar}>
		      		<IconButton className={classes.userProfileFoto}>
			      		<Avatar 
		      				className={classes.userProfileFotoAvatar}
		      				edge="end" 
		      				alt="Nome do usuario" 
		      				src={user_profile_foto} />
		      		</IconButton>
		      		<Box className={classes.menu_toolbar_title}>
		      			<Grid>
		      				<Grid sm={3} 
		      					  className={classes.toolbar_user_info}>
			      				<Typography
			      					sm={12}
			      					>User Name</Typography>
			      			</Grid>
			      			<Typography>
			      				Runeterra
			      			</Typography>
		      			</Grid>
		      		</Box>
		      		<IconButton
		      			edge="start" 
		      			color="inherit" 
		      			aria-label="menu"
		      			onClick={menu_change}>

		            	<MenuIcon />

		          	</IconButton>
		      	</Toolbar>
		      	<Drawer 
		      		open={menu_openned}
		      		onClose={menu_change}
		      		>
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
		      </AppBar>
		</React.Fragment>
		);
}

export default FMenu;