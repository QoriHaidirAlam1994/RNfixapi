import React, { Component } from "react";
import { AppRegistry, View, StyleSheet } from "react-native";
import {
  Picker,
  Item,
  Input,
  Container,
  Header,
  Content,
  DatePicker,
  Text,
  Body,
  Title,
  Left,
  Right,
  Button,
  Icon,
  List,
  ListItem
} from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";

export default class home extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Pemesanan Tiket"
  });

  constructor(props) {
    super(props);
    this.state = { chosenDate: new Date(), selected2: undefined };
    this.setDate = this.setDate.bind(this);
  }

  onValueChange2(value) {
    this.setState({
      selected2: value
    });
  }

  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }
  render() {
    return (
      <Container>
        <Content>
          <List>
            <ListItem itemDivider>
              <Text>Nama Pembeli</Text>
            </ListItem>
            <ListItem>
              <Item rounded style={{ padding: 5, margin: 5 }}>
                <Input placeholder="Masukan Nama" />
              </Item>
            </ListItem>
            <ListItem itemDivider>
              <Text>Tanggal Pembelian</Text>
            </ListItem>
            <ListItem>
              <Item rounded style={{ padding: 5, margin: 5 }}>
                <DatePicker
                  defaultDate={new Date(2018, 4, 4)}
                  minimumDate={new Date(2018, 1, 1)}
                  maximumDate={new Date(2018, 12, 31)}
                  locale={"en"}
                  timeZoneOffsetInMinutes={undefined}
                  modalTransparent={false}
                  animationType={"fade"}
                  androidMode={"default"}
                  placeHolderText="Select date"
                  textStyle={{ color: "green" }}
                  placeHolderTextStyle={{ color: "#d3d3d3" }}
                  onDateChange={this.setDate}
                />
                <Text>
                  Date: {this.state.chosenDate.toString().substr(4, 12)}
                </Text>
              </Item>
            </ListItem>

            <ListItem itemDivider>
              <Text>Pembayaran</Text>
            </ListItem>
            <ListItem>
              <Item picker style={{ padding: 5, margin: 5 }}>
                <Picker
                  mode="dropdown"
                  iosIcon={<Icon name="ios-arrow-down-outline" />}
                  style={{ width: undefined }}
                  placeholder="Select your SIM"
                  placeholderStyle={{ color: "#bfc6ea" }}
                  placeholderIconColor="#007aff"
                  selectedValue={this.state.selected2}
                  onValueChange={this.onValueChange2.bind(this)}
                >
                  <Picker.Item label="Wallet" value="key0" />
                  <Picker.Item label="ATM Card" value="key1" />
                  <Picker.Item label="Debit Card" value="key2" />
                  <Picker.Item label="Credit Card" value="key3" />
                  <Picker.Item label="Net Banking" value="key4" />
                </Picker>
              </Item>
            </ListItem>
            <ListItem itemDivider>
              <Text>Pilihan Tiket</Text>
            </ListItem>

            <View
            >
              <Grid>
                <Col>
                  <Row>
                    <Text>Harga</Text>
                  </Row>
                  <Row>
                    <Text>Rp 5.000.000</Text>
                  </Row>
                </Col>

                <Col>
                  <Row>
                    <Text>Quantity</Text>
                  </Row>
                  <Row>
                    <Text>1</Text>
                  </Row>
                </Col>

                <Col>
                  <Row>
                    <Text>Subtotal</Text>
                  </Row>
                  <Row>
                    <Text>Rp 5.000.000</Text>
                  </Row>
                </Col>
              </Grid>
            </View>

            <Button block>
              <Text>Submit</Text>
            </Button>
          </List>
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },

  pageName: {
    margin: 10,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center"
  },

  week_days: {
    flexDirection: "row"
  },
  day: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 17,
    margin: 2
  },
  day_text: {
    textAlign: "center",
    color: "#A9A9A9",
    fontSize: 25
  }
});

AppRegistry.registerComponent("profile", () => profile);
