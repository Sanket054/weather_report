import { Box, Container, Grid, Heading, Link, Text, Flex, Icon } from "@chakra-ui/react";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs";

const Footer = () => {
  return (
    <Box bg="gray.100" py={10} mt={10}>
      <Container maxW="80%">
        <Grid templateColumns="repeat(4, 1fr)" gap={10}>
          {/* Column 1: Company */}
          <Box>
            <Heading size="sm" mb={3} color="gray.600">
              COMPANY
            </Heading>
            <Link display="block" color="gray.500">Proven Superior Accuracy</Link>
            <Link display="block" color="gray.500">About AccuWeather</Link>
            <Link display="block" color="gray.500">Digital Advertising</Link>
            <Link display="block" color="gray.500">Careers</Link>
            <Link display="block" color="gray.500">Press</Link>
            <Link display="block" color="gray.500">Contact Us</Link>
          </Box>

          {/* Column 2: Products & Services */}
          <Box>
            <Heading size="sm" mb={3} color="gray.600">
              PRODUCTS & SERVICES
            </Heading>
            <Link display="block" color="gray.500">For Business</Link>
            <Link display="block" color="gray.500">For Partners</Link>
            <Link display="block" color="gray.500">For Advertising</Link>
            <Link display="block" color="gray.500">AccuWeather APIs</Link>
            <Link display="block" color="gray.500">AccuWeather Connect</Link>
            <Link display="block" color="gray.500">RealFeel™ & RealFeel Shade™</Link>
            <Link display="block" color="gray.500">Personal Weather Stations</Link>
          </Box>

          {/* Column 3: Apps & Downloads */}
          <Box>
            <Heading size="sm" mb={3} color="gray.600">
              APPS & DOWNLOADS
            </Heading>
            <Link display="block" color="gray.500">iPhone App</Link>
            <Link display="block" color="gray.500">Android App</Link>
            <Link display="block" color="gray.500">See all Apps & Downloads</Link>

            <Heading size="sm" mt={4} mb={3} color="gray.600">
              SUBSCRIPTION SERVICES
            </Heading>
            <Link display="block" color="gray.500">AccuWeather Premium</Link>
            <Link display="block" color="blue.500">AccuWeather Professional</Link>
          </Box>

          {/* Column 4: More */}
          <Box>
            <Heading size="sm" mb={3} color="gray.600">
              MORE
            </Heading>
            <Link display="block" color="gray.500">AccuWeather Ready</Link>
            <Link display="block" color="gray.500">Business</Link>
            <Link display="block" color="gray.500">Health</Link>
            <Link display="block" color="gray.500">Hurricane</Link>
            <Link display="block" color="gray.500">Leisure and Recreation</Link>
            <Link display="block" color="gray.500">Severe Weather</Link>
            <Link display="block" color="gray.500">Space and Astronomy</Link>
            <Link display="block" color="gray.500">Sports</Link>
            <Link display="block" color="gray.500">Travel</Link>
            <Link display="block" color="gray.500">Weather News</Link>
          </Box>
        </Grid>

        {/* Social Media Icons */}
        <Flex mt={6} gap={4}>
          <Icon as={BsSunFill} boxSize={6} color="orange.500" />
          <Icon as={FaFacebook} boxSize={6} color="blue.600" />
          <Icon as={FaTwitter} boxSize={6} color="blue.400" />
        </Flex>

        {/* Footer Bottom Text */}
        <Text mt={6} fontSize="sm" color="gray.500">
          © 2025 AccuWeather, Inc. "AccuWeather" and sun design are registered trademarks of AccuWeather, Inc. All Rights Reserved.
        </Text>
        <Flex justify="center" mt={2} gap={4} fontSize="sm">
          <Link color="gray.500">Terms of Use</Link>
          <Text color="gray.500">|</Text>
          <Link color="gray.500">Privacy Policy</Link>
          <Text color="gray.500">|</Text>
          <Link color="gray.500">Cookie Policy</Link>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
