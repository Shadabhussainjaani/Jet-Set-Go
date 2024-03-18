import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Wrapper from '@src/screens/Wrapper/WrapperComp';
import { useDispatch, useSelector } from 'react-redux';
import AnimatedLottieView from 'lottie-react-native';
import { ScreenWidth, ScreenHeight } from '@src/helpers';
import AntDesign from 'react-native-vector-icons/AntDesign';

const FlightsListing = ({ navigation, route }) => {
  const { selectedDestination, selectedSource } = route?.params?.payload;
  const [filteredData, setFilteredData] = useState([]);
  const { apiLoad, flightDetails } = useSelector(state => state?.flights);
  const [filter, setFilter] = useState('lowToHigh');

  const filterBySelectedCity = () => {
    if (flightDetails?.length > 0) {
      let newArr = flightDetails?.map((item, index) => {
        console.log('🚀 ~ newArr ~ item:', item);
        if (
          item?.origin == selectedSource &&
          item?.destination == selectedDestination
        ) {
          return item;
        }
      });
      newArr = newArr.filter(function (element) {
        return element !== undefined;
      });
      return () => newArr;
    }
  };
  const newFun = filterBySelectedCity();
  useEffect(() => {
    let filteredData = newFun(selectedDestination, selectedSource);
    let filteredDataByPrice = filterFlightsByPrice(filteredData, filter);
    setFilteredData(filteredDataByPrice);
  }, [flightDetails]);

  const filterFun = filter => {
    setFilteredData(filterFlightsByPrice(filteredData, filter));
  };

  function filterFlightsByPrice(flights, direction) {
    let sortedFlights;

    if (direction === 'highToLow') {
      sortedFlights = flights.slice().sort((a, b) => b.price - a.price);
    } else if (direction === 'lowToHigh') {
      sortedFlights = flights.slice().sort((a, b) => a.price - b.price);
    } else {
      return flights;
    }

    return sortedFlights;
  }

  const getDateTime = dateTime => {
    var dateObject = new Date(dateTime);
    var hours = dateObject.getHours();
    var minutes = dateObject.getMinutes();
    var day = dateObject.getDate();
    var month = dateObject.getMonth() + 1;
    var year = dateObject.getFullYear() % 100;
    return day + '/' + month + '/' + year + ' ' + hours + ':' + minutes;
  };

  return (
    <Wrapper isBackgroundImage>
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.flexGrow}
          showsVerticalScrollIndicator={false}>
          <View style={styles.mainContainer}>
            <View style={styles.flightDetailsContainer}>
              <Text style={styles.cityName}>{selectedSource} 🌍</Text>
              <View style={styles.cityNameStyle} />
              <Text style={styles.cityName}>🌍 {selectedDestination}</Text>
            </View>
            <View style={styles.flightsContainers}>
              {filteredData?.length > 1 && (
                <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={() => {
                    setFilter(
                      filter == 'highToLow' ? 'lowToHigh' : 'highToLow',
                    );
                    filterFun(
                      filter == 'highToLow' ? 'lowToHigh' : 'highToLow',
                    );
                  }}>
                  <Text style={styles.priceText}>
                    Price{' '}
                    <AntDesign color={'white'} name={'filter'} size={19} />
                  </Text>
                </TouchableOpacity>
              )}
              {filteredData?.length > 0 &&
                filteredData?.map((item, index) => (
                  <View key={index} style={styles.modalContainer}>
                    <View
                      style={[
                        styles.flightDetailsContainer,
                        { paddingHorizontal: 30 },
                      ]}>
                      <View>
                        <Text style={styles.cityName}>{item?.origin}</Text>
                        <Text style={styles.timeDate}>
                          {getDateTime(item?.departureTime)}
                        </Text>
                      </View>
                      <View style={styles.dashed} />
                      <View>
                        <Text style={styles.duration}>
                          {item?.displayData?.totalDuration}
                        </Text>
                      </View>
                      <View>
                        <Text style={styles.cityName}>{item?.destination}</Text>
                        <Text style={styles.timeDate}>
                          {getDateTime(item?.arrivalTime)}
                        </Text>
                      </View>
                    </View>
                    <View
                      style={[
                        styles.fairComp,
                        {
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          width: '100%',
                        },
                      ]}>
                      <Text style={styles.commonText}>
                        Airline: {item?.airline}
                      </Text>
                      <Text style={styles.commonText}>
                        Aircraft: {item?.aircraft}
                      </Text>
                    </View>
                    <View style={styles.fairComp}>
                      <Text style={styles.commonText}>
                        Fair: ₹{item?.price}
                      </Text>
                    </View>
                  </View>
                ))}
            </View>
          </View>
        </ScrollView>
      </View>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  modalContainer: {
    // height: ScreenHeight / 6,
    width: ScreenWidth - 40,
    backgroundColor: 'white',
    elevation: 5,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 10,
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  flightsContainers: {
    marginTop: 30,
  },
  flightDetailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: ScreenWidth - 40,
    alignItems: 'center',
  },
  cityName: { fontSize: 18, color: '#000000' },
  timeDate: { fontSize: 12, color: '#000000' },
  fairComp: { marginTop: 20 },
  flexGrow: { flexGrow: 1 },
  cityNameStyle: {
    width: '40%',
    borderWidth: 1,
    borderStyle: 'dashed',
    height: 0,
    borderColor: 'white',
  },
  priceText: {
    textAlign: 'right',
    fontSize: 18,
    marginBottom: 10,
    paddingHorizontal: 10,
    color: 'white',
    alignItems: 'center',
  },
  dashed: {
    width: '40%',
    borderWidth: 1,
    borderStyle: 'dashed',
    height: 0,
    borderColor: 'black',
  },
  duration: {
    position: 'absolute',
    right: 50,
    top: 10,
  },
  commonText: { fontSize: 16, color: 'black' },
});

export default FlightsListing;
