import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PersonalSettingsComponent from './PersonalSettingsComponent';
import SecuritySettingsComponent from './SecuritySettingsComponent';

const drawerWidth = '58vh';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
      zIndex: theme.zIndex.drawer + 1,
      display: 'flex',

  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
      overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    },
    titlemenu: {
      flexGrow: 1,
    },
    buttonmenu: {
        marginRight: theme.spacing(2),
    }
}));

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const ProfileComponent = (props) => {
  
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
        <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="Personal settings" {...a11yProps(0)} />
        <Tab label="Security settings" {...a11yProps(1)} />
      </Tabs>
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        <TabPanel value={value} index={0}>
        <PersonalSettingsComponent />
      </TabPanel>
      <TabPanel value={value} index={1}>
      <SecuritySettingsComponent />
      </TabPanel>
      </main>
    </>
  );
}

export default ProfileComponent;