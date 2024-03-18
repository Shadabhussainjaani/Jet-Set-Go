/** @format */

import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Image,
  ScrollView,
  Alert,
  TouchableOpacity,
} from "react-native";
import Wrapper from "@src/screens/Wrapper/WrapperComp";
import Text from "@src/components/text/Text.jsx";
import Button from "@src/components/button/Button";
import { ScreenWidth, ScreenHeight } from "@src/helpers";
import { Dropdown } from "react-native-element-dropdown";
import { useDispatch, useSelector } from "react-redux";
import { getAllFlightsDetails } from "@src/modules/findflights/actions";
import DatePicker from "react-native-date-picker";
import AnimatedLottieView from "lottie-react-native";

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [selectedSource, setSelectedSource] = useState(null);
  const [selectedDestination, setSelectedDestination] = useState(null);
  const source = [
    { label: "Delhi", value: "Delhi" },
    { label: "Mumbai", value: "Mumbai" },
    { label: "Bangalore", value: "Bangalore" },
    { label: "Chennai", value: "Chennai" },
    { label: "Kolkata", value: "Kolkata" },
  ];
  const destination = [
    { label: "Delhi", value: "Delhi" },
    { label: "Mumbai", value: "Mumbai" },
    { label: "Bangalore", value: "Bangalore" },
    { label: "Chennai", value: "Chennai" },
    { label: "Kolkata", value: "Kolkata" },
  ];
  const searchFlight = () => {
    if (!selectedSource || !selectedDestination) {
      Alert.alert(
        "Jet Set Go!",
        "Please select Onboarding place and Destination place.",
        [
          {
            text: "Ok",
            onPress: () => {},
          },
        ]
      );
      return;
    } else {
      const payload = {
        selectedSource: selectedSource,
        selectedDestination: selectedDestination,
      };
      navigation.navigate("flightDetails", {
        payload,
      });
    }
  };
  useEffect(() => {
    dispatch(getAllFlightsDetails());
  }, []);

  const { apiLoad, flightDetails } = useSelector((state) => state.flights);
  useEffect(() => {
    console.log("🚀 ~ useEffect ~ flightDetails:", flightDetails);
  }, [flightDetails]);

  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <Wrapper isBackgroundImage>
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <View>
              <Text style={styles.headerText}>Let's Book Your Flight 🚀✨</Text>
            </View>
            <View>
              <Image
                source={require("@src/assets/Images/man.png")}
                style={styles.imageStyle}
              />
            </View>
          </View>
          <View style={styles.mainContainer}>
            <View style={styles.modalContainer}>
              <View style={styles.dropDownContainer}>
                <TouchableOpacity
                  onPress={() => {
                    setOpen(!open);
                  }}
                >
                  <DatePicker
                    mode={"date"}
                    modal
                    open={open}
                    date={date}
                    onConfirm={(date) => {
                      setOpen(false);
                      setDate(date);
                    }}
                    onCancel={() => {
                      setOpen(false);
                    }}
                    minimumDate={new Date()}
                  />
                  <Text style={styles.label}>Departure Date:</Text>
                  <Text>
                    {new Date(date).getDate() +
                      "-" +
                      (parseInt(new Date(date).getMonth()) + parseInt(1)) +
                      "-" +
                      new Date(date).getFullYear()}
                    {/* 2023-03-31{' '} */}
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.dropDownContainer}>
                <Text style={styles.label}>From:</Text>
                <Dropdown
                  style={styles.dropDown}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={styles.placeholderStyle}
                  data={source}
                  maxHeight={300}
                  labelField="label"
                  valueField="value"
                  placeholder="Select item"
                  searchPlaceholder="Search..."
                  value={selectedSource}
                  onChange={(item) => {
                    setSelectedSource(item.value);
                  }}
                  itemTextStyle={{ color: "black" }}
                />
              </View>
              <View style={styles.dropDownContainer}>
                <Text style={styles.label}>To:</Text>
                <Dropdown
                  style={{
                    marginBottom: 20,
                  }}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={styles.placeholderStyle}
                  data={destination}
                  maxHeight={300}
                  labelField="label"
                  valueField="value"
                  placeholder="Select item"
                  searchPlaceholder="Search..."
                  value={selectedDestination}
                  onChange={(item) => {
                    setSelectedDestination(item.value);
                  }}
                  itemTextStyle={{ color: "black" }}
                />
              </View>

              <View style={{ marginTop: 20 }}>
                <Button
                  style={{ width: ScreenWidth - 80, bottom: 0 }}
                  text={"Search"}
                  onPress={() => searchFlight()}
                />
              </View>
            </View>
          </View>
          <>
            <AnimatedLottieView
              source={require("@src/assets/Lottie/Airplane.json")}
              autoPlay
              loop={true}
              speed={1}
              style={{
                height: ScreenWidth,
                width: ScreenWidth,
                top: ScreenWidth + 50,
                right: -20,
                bottom: 0,
                position: "absolute",
              }}
            />
          </>
          {/* <View style={styles.mainContainer}>
            <View style={styles.headerContainer}>
              <Text>Upcoming </Text>
              <Text>Upcoming </Text>
            </View>
            <View style={styles.modalContainer}></View>
          </View> */}
        </View>
      </Wrapper>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: "row",
    marginVertical: 25,
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    color: "white",
    fontSize: 22,
    width: "75%",
  },
  imageStyle: {
    height: 35,
    width: 35,
  },
  mainContainer: {
    // marginTop: 30,
    zIndex: 1,
  },
  modalContainer: {
    height: ScreenHeight / 2.3,
    width: "100%",
    backgroundColor: "white",
    elevation: 5,
    borderRadius: 10,
    alignItems: "center",
  },
  dropDownContainer: {
    borderWidth: 1,
    height: 50,
    width: ScreenWidth - 80,
    borderRadius: 5,
    marginTop: 20,
    borderColor: "gray",
    padding: 8,
  },
  dateContainer: {
    borderWidth: 1,
    height: 60,
    width: ScreenWidth / 2.5,
    borderRadius: 10,
    marginTop: 20,
    borderColor: "gray",
    padding: 10,
  },
  placeholderStyle: {
    color: "#000000",
  },
  label: { fontSize: 12 },
  dropDown: {
    marginBottom: 20,
  },
});

export default HomeScreen;
