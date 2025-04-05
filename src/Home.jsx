import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


import {
  Input,
  Button,
  Box,
  VStack,
  Container,
  Text,
  Image,
  Heading,
  Spacer
} from "@chakra-ui/react";
import logo from "../src/assets/AccuWeather_Logo.svg.png";

import WeatherConditions from "./WeatherConditions";
import Footer from "./Footer";
import WeatherNews from "./WeatherNews";


function Home() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [countryName, setCountryName] = useState("");
  const [error, setError] = useState(null);
  const [bgImage, setBgImage] = useState("");
  const navigate = useNavigate();

  const imgURL = [
    "https://images.pexels.com/photos/355465/pexels-photo-355465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/17810080/pexels-photo-17810080/free-photo-of-stars-in-the-dark-sky.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "https://images.pexels.com/photos/1254736/pexels-photo-1254736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/907485/pexels-photo-907485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/417045/pexels-photo-417045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", "https://images.pexels.com/photos/631342/pexels-photo-631342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", "https://images.pexels.com/photos/777211/winter-sunset-purple-sky-777211.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  ];

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * imgURL.length);
    setBgImage(imgURL[randomIndex]);
  }, []);

  const fetchWeather = async () => {
    const API_KEY = import.meta.env.VITE_API_KEY;

    if (!city.trim()) {
      setWeatherData(null)
      setCountryName("")
      setError(null)
      return;
    }

    if (!API_KEY) {
      setError("API Key is missing. Check your .env file.");
      return;
    }

    try {
      const locationURL = `https://dataservice.accuweather.com/locations/v1/cities/search?apikey=${API_KEY}&q=${city}`;
      const locationResponse = await axios.get(locationURL);

      if (!locationResponse.data.length) {
        setWeatherData(null);
        setCountryName("");
        setError("City not found.");
        return;
      }

      const locationKey = locationResponse.data[0].Key;
      const country = locationResponse.data[0].Country.LocalizedName;
      setCountryName(country);

      const weatherURL = `https://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${API_KEY}`;
      const weatherResponse = await axios.get(weatherURL)

      setWeatherData(weatherResponse.data[0])
      setError(null)

      console.log(weatherData)

      localStorage.setItem("city", city)

    } catch (err) {
      console.error("Network Error:", err)
      setError("Failed to fetch data. Check your API key and network.")
      setWeatherData(null)
      setCountryName("")
    }
  };



  return (
    <>
      <Box
        bgImage={`url(${bgImage})`}
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
        h="60vh"
        w="100vw"
        position="relative"
        p={4}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Box position="absolute" top="20px" left="50px">
          <Image src={logo} alt="AccuWeather Logo" height="30px" />
        </Box>

        <Container centerContent>
          <VStack mt={10} spacing={4} p={6} borderRadius="md" w="xl">
            <Input
              value={city}
              onChange={(e) => {
                setCity(e.target.value);
                if (!e.target.value.trim()) {
                  setWeatherData(null);
                  setCountryName("");
                }
              }}
              bg="white"
              size="md"
              placeholder="Search Your Address, City, or Zip Code"
            />
            <Button onClick={fetchWeather} colorScheme="blue">
              Get Weather
            </Button>
          </VStack>
        </Container>

        {weatherData && city.trim() && (
          <Box color={"white"} w={"20%"} Box shadow="box-shadow: rgba(155, 155, 168, 0.25) 0px 30px 60px -12px inset, rgba(212, 181, 181, 0.3) 0px 18px 36px -18px inset;" mt={4} p={4} bg="transparent" border={"0.5px solid black"} borderRadius="md" boxShadow="md">
            <Text fontSize="xl">{city}</Text>
            <Text fontSize="lg">{countryName}</Text>
            <Text display="inline-flex" alignItems="center" gap={2}>
              <Image
                h={10}
                src="https://cdn-icons-png.flaticon.com/512/6198/6198743.png"
                alt="Weather Icon"
              />
              <Heading as='h2' size='lg'>
                {weatherData.Temperature.Metric.Value}°C
              </Heading>
            </Text>
            <Text>RealFeel °{weatherData.Temperature.Metric.Value - 1}</Text>


          </Box>
        )}
        <Box >
          <Button bg={"gray.100"} color={"black"} onClick={() => navigate("/dashboard")} fw={"bold"} m={10} p={4} border={"1px solid black"} colorScheme="transparent" size='sm'>
            More....
          </Button>
        </Box>

        {error && (
          <Text color="red" mt={2} fontSize="lg">
            {error}
          </Text>
        )}
      </Box>

      {/* <Container >
        <VStack>
          <Box m={2} shadow="12px 12px 2px 1px rgba(0, 0, 255, .2)" />

          <Image src="https://images.pexels.com/photos/777211/winter-sunset-purple-sky-777211.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
          <Box shadow="xl" />
        </VStack>
      </Container> */}



      <Spacer />
      <Spacer />

      <Box m={5}>
        <Image
          h="60vh"
          w="55%"
          mx="auto"
          src="https://www.mapsofworld.com/style_2019/images/world-map.png?v:1"
        />
      </Box>


      <Box>
        <WeatherConditions />
      </Box>


      <Box>
        <WeatherNews />
      </Box>
      <Box>
        <Footer />
      </Box>

    </>
  );
}

export default Home;
