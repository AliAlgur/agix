import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import AboutService from "../AboutService";
import { useStyles } from "./styles";

class StyledTabs extends Component {
  state = {
    activeTab: 0,
  };

  handleTabChange = activeTab => {
    this.setState({ activeTab });
  };

  render() {
    const { classes } = this.props;
    const { activeTab } = this.state;
    const tabs = [{ name: "About", activeIndex: 0, component: <AboutService service={this.props.service} /> }];
    const activeComponent = tabs.filter(el => el.activeIndex === activeTab)[0].component;
    return (
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <AppBar position="static" className={classes.tabsHeader}>
          <Tabs value={activeTab}>
            {tabs.map(value => (
              <Tab key={value.name} label={value.name} onClick={() => this.handleTabChange(value.activeIndex)} />
            ))}
          </Tabs>
        </AppBar>
        {activeComponent}
      </Grid>
    );
  }
}

export default withStyles(useStyles)(StyledTabs);
