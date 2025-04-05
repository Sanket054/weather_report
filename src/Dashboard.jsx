import { Box, Container, Flex, Image, Input, Text, VStack, Heading, Card, CardBody, Spacer } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { FaSearch, FaBars, FaGamepad } from "react-icons/fa";
import axios from "axios";
import logo from "../src/assets/AccuWeather_Logo.svg.png";
import WeatherConditions from "./WeatherConditions";
import WeatherNews from "./WeatherNews";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState("Today");

  const city = localStorage.getItem("city") || "Parbhani";
  const API_KEY = import.meta.env.VITE_API_KEY;

  const tabs = [
    "Today", "Hourly", "Daily", "Radar", "Minutecast",
    "Monthly", "Air Quality", "Health & Activities", "For Business"
  ];

  const date = weatherData?.date ? new Date(weatherData.date).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }) : "N/A";
  const temp = weatherData?.temp ?? "--";
  const realFeel = weatherData?.realFeel ?? "--";
  const shadeTemp = weatherData?.shadeTemp ?? "--";
  const windSpeed = weatherData?.windSpeed ?? "--";
  const airQuality = weatherData?.airQuality ?? "Unknown";


  useEffect(() => {
    const fetchWeather = async () => {
      if (!city) {
        setError("City not found. Please set a city in localStorage.")
        return;
      }

      try {
        console.log(`Fetching location for city: ${city}`)

        const locationResponse = await axios.get(
          `https://dataservice.accuweather.com/locations/v1/cities/search?apikey=${API_KEY}&q=${city}`
        );

        console.log("Location API Response:", locationResponse.data);

        if (!locationResponse.data || locationResponse.data.length === 0) {
          setError("City not found in AccuWeather database.");
          return;
        }

        const locationKey = locationResponse.data[0]?.Key;
        const country = locationResponse.data[0]?.Country?.LocalizedName;

        if (!locationKey) {
          setError("Location key is missing in API response.");
          return;
        }

        console.log(`Fetching weather for locationKey: ${locationKey}`);

        const weatherResponse = await axios.get(
          `https://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${API_KEY}&details=true`
        );

        console.log("Weather API Response:", weatherResponse.data);

        if (!weatherResponse.data || weatherResponse.data.length === 0) {
          setError("Weather data not available.");
          return;
        }


        setWeatherData({
          temp: weatherResponse.data[0]?.Temperature?.Metric?.Value || "N/A",
          realFeel: weatherResponse.data[0]?.RealFeelTemperature?.Metric?.Value || "N/A",
          airQuality: weatherResponse.data[0]?.AirAndPollen?.[0]?.Category || "N/A",
          windSpeed: weatherResponse.data[0]?.Wind?.Speed?.Metric?.Value || "N/A",
          shadeTemp: weatherResponse.data[0]?.RealFeelTemperatureShade?.Metric?.Value || "N/A",
          date: weatherResponse.data[0]?.LocalObservationDateTime || "N/A",
          country,
        })

        setError("");
      } catch (error) {
        console.error("API Error:", error.response ? error.response.data : error.message);
        setError("Error fetching weather data. Check API key and internet connection.");
      }
    };

    fetchWeather();
  }, [city]);

  return (

    <>
      <Box>


        <Box bg="black"  color="white" height="80px">
          <Container maxW="80%" display="flex" alignItems="center" justifyContent="space-between">
            <Link to="/">
            <Flex alignItems="center" m={5}>
              <Image src={logo} alt="AccuWeather Logo" height="30px" />
              <Text ml={3} fontSize="sm">{city}</Text>
            </Flex>
            </Link>

            <Flex alignItems="center" bg="white" borderRadius="md" p={1} pl={2}>
              <FaSearch color="gray" />
              <Input placeholder="Address, City or Zip Code" variant="unstyled" ml={2} width="250px" />
            </Flex>

            <Flex alignItems="center">
              <FaGamepad size={20} />
              <FaBars size={20} style={{ marginLeft: "15px" }} />
            </Flex>
          </Container>
        </Box>


        <Box bg="gray.200" height="50px" display="flex" alignItems="center" px={6}>
          {tabs.map((tab) => (
            <Text
              key={tab}
              mx={3}
              cursor="pointer"
              fontSize="sm"
              fontWeight={activeTab === tab ? "bold" : "normal"}
              borderBottom={activeTab === tab ? "2px solid orange" : "none"}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </Text>
          ))}
        </Box>


        <Container maxW="80%" mt={6}>
          {error ? (
            <Text color="red.500">{error}</Text>
          ) : weatherData ? (
            <Card m="10px auto" p={5} w="500px" >
              <CardBody>
                <Flex justify="space-between" align="center" mb={2}>
                  <Heading size="xs" color="gray.500">
                    TODAY'S WEATHER
                  </Heading>
                  <Text fontWeight="bold" fontSize="sm">
                    {new Date(weatherData.date).toLocaleDateString("en-US", {
                      weekday: "short",
                      month: "short",
                      day: "2-digit",
                    })}
                  </Text>
                </Flex>

                <Flex align="center" fontWeight="bold" mb={1}>
                  <Image
                    h={6}
                    mr={2}
                    src="https://www.awxcdn.com/adc-assets/images/weathericons/6.svg"
                    alt="Partly Sunny"
                  />
                  <Text>
                    Increasing cloudiness and very warm <strong>Hi: <span style={{color:"red"}}>
                    {weatherData.realFeel}°
                    </span> </strong>
                  </Text>
                </Flex>

                <Flex align="center" fontWeight="bold">
                  <Image
                    h={6}
                    mr={2}
                    src="https://www.awxcdn.com/adc-assets/images/weathericons/35.svg"
                    alt="Partly Cloudy"
                  />
                  <Text>
                    Tonight: Partly cloudy <strong>Lo: <span style={{color:"red"}}>{weatherData.shadeTemp}</span>°</strong>
                  </Text>
                </Flex>
              </CardBody>
            </Card>


          ) : (
            <Text>Loading weather data...</Text>
          )}

          <Card m="10px auto" p={4} w="500px">
            <CardBody>
             
              <Flex justify="space-between" align="center" mb={2}>
                <Heading size="xs" color="gray.500">CURRENT WEATHER</Heading>
                <Text fontWeight="bold" fontSize="sm">{date}</Text>
              </Flex>

              <Flex align="center" mb={3}>
                <Image h={12} src="https://www.awxcdn.com/adc-assets/images/weathericons/3.svg" alt="Weather Icon" />
                <Box ml={3}>
                  <Text fontSize="4xl" fontWeight="bold">
                    {temp}° <Text as="span" fontSize="md" color="gray.500">C</Text>
                  </Text>
                  <Text fontSize="sm" color="gray.600">RealFeel: <strong>{realFeel}°</strong></Text>
                </Box>
              </Flex>


              <Text fontWeight="bold">Partly Sunny</Text>
              <Text fontSize="sm" color="gray.500" cursor="pointer">MORE DETAILS &gt;</Text>


              <Box mt={4}>
                <Flex justify="space-between">
                  <Text color="gray.600">RealFeel Shade™</Text>
                  <Text fontWeight="bold">{shadeTemp}°</Text>
                </Flex>
                <Flex justify="space-between">
                  <Text color="gray.600">Wind</Text>
                  <Text fontWeight="bold">{windSpeed} km/h</Text>
                </Flex>
                <Flex justify="space-between">
                  <Text color="gray.600">Wind Gusts</Text>
                  <Text fontWeight="bold">30 km/h</Text>
                </Flex>
                <Flex justify="space-between">
                  <Text color="gray.600">Air Quality</Text>
                  <Text fontWeight="bold" color="green.500">{airQuality}</Text>
                </Flex>
              </Box>
            </CardBody>
          </Card>
        </Container>
        <Container>
          <VStack>
            <Box>
              <Image src="https://api.accuweather.com/maps/v1/radar/static/globalSIR/zxyuv/4/11/7/5/0.jpg?&imgwidth=768&imgheight=432&base_data=radar&apikey=de13920f574d420984d3080b1fa6132b&language=en" />
            </Box>
          </VStack>
        </Container>

      </Box>
      <Box>
        <WeatherConditions />
      </Box>
      <Box>
        <WeatherNews />
      </Box>
      <Box>
        <Footer/>
      </Box>
    </>
  );
};

export default Dashboard;
