import { Box, Heading, Image, Grid, Text, Flex, Link } from "@chakra-ui/react";
import { ArrowRightIcon } from "@chakra-ui/icons";

const weatherData = [
  { city: "Ahmedabad", temp: "38°", icon: "https://cdn-icons-png.flaticon.com/128/869/869869.png" },
  { city: "Bengaluru", temp: "34°", icon: "https://cdn-icons-png.flaticon.com/128/869/869869.png" },
  { city: "Bhopal", temp: "39°", icon: "https://cdn-icons-png.flaticon.com/128/869/869869.png" },
  { city: "Chandigarh", temp: "38°", icon: "https://cdn-icons-png.flaticon.com/128/869/869869.png" },
  { city: "Chennai", temp: "35°", icon: "https://cdn-icons-png.flaticon.com/128/869/869869.png" },
  { city: "Delhi", temp: "37°", icon: "https://cdn-icons-png.flaticon.com/128/869/869869.png" },
  { city: "Dispur", temp: "32°", icon: "https://cdn-icons-png.flaticon.com/128/869/869869.png" },
  { city: "Faridabad", temp: "38°", icon: "https://cdn-icons-png.flaticon.com/128/869/869869.png" },
  { city: "Guwahati", temp: "32°", icon: "https://cdn-icons-png.flaticon.com/128/869/869869.png" },
  { city: "Jaipur", temp: "36°", icon: "https://cdn-icons-png.flaticon.com/128/869/869869.png" },
  { city: "Kolkata", temp: "37°", icon: "https://cdn-icons-png.flaticon.com/128/869/869869.png" },
  { city: "Lucknow", temp: "41°", icon: "https://cdn-icons-png.flaticon.com/128/869/869869.png" },
  { city: "Ludhiana", temp: "37°", icon: "https://cdn-icons-png.flaticon.com/128/869/869869.png" },
  { city: "Mumbai", temp: "30°", icon: "https://cdn-icons-png.flaticon.com/128/869/869869.png" },
  { city: "New Delhi", temp: "38°", icon: "https://cdn-icons-png.flaticon.com/128/869/869869.png" },
  { city: "Patna", temp: "42°", icon: "https://cdn-icons-png.flaticon.com/128/869/869869.png" },
  { city: "Pune", temp: "38°", icon: "https://cdn-icons-png.flaticon.com/128/869/869869.png" },
  { city: "Raipur", temp: "41°", icon: "https://cdn-icons-png.flaticon.com/128/869/869869.png" },
  { city: "Ranchi", temp: "38°", icon: "https://cdn-icons-png.flaticon.com/128/869/869869.png" },
  { city: "Surat", temp: "32°", icon: "https://cdn-icons-png.flaticon.com/128/869/869869.png" },
];

const WeatherConditions = () => {
  return (
    <Box maxW="800px" mx="auto" bg="gray.100" p={4} borderRadius="md">

      <Flex justify="space-between" align="center" mb={4} px={2}>
        <Heading size="sm" color="blue.600">
          INDIA WEATHER CONDITIONS
        </Heading>
        <Link fontSize="sm" color="gray.600" display="flex" alignItems="center">
          See more <ArrowRightIcon ml={1} />
        </Link>
      </Flex>


      <Grid templateColumns="repeat(2, 1fr)" gap={2} bg="white" borderRadius="md">
        {weatherData.map((item, index) => (
          <Flex
            key={index}
            justify="space-between"
            align="center"
            p={3}
            borderBottom={index < weatherData.length - 2 ? "1px solid gray.200" : "none"}
            borderRight={index % 2 === 0 ? "1px solid gray.200" : "none"}
          >
            <Text fontWeight="medium">{item.city}</Text>
            <Flex align="center">
              <Image src={item.icon} alt="Weather Icon" boxSize="16px" mr={1} />
              <Text>{item.temp}</Text>
            </Flex>
          </Flex>
        ))}
      </Grid>
    </Box>
  )
}

export default WeatherConditions;
