import { Flex, Text, VStack } from '@chakra-ui/react'
import Job from './Job';
import Question from './Question';
const jobs = [
    { position: "Front End Developer with Angular", pay: "", company: "WalletHub", location: "Washington, DC", type: "Remote", tags: ["angular js", "cordova"] },
    { position: "Senior iOS / iPhone Engineer", pay: "", company: "Perk.com INC", location: "Bengaluru, IN", type: "In Office", tags: ["iOS", "iPhone"] },
    { position: "Software Engineer", company: "SparkNET Technologies", pay: "7LPA - 12LPA", location: "No Location", type: "Remote", tags: ["iOS", "ruby on rails"] },
];
const questions = ["Were there women who were against giving women the right to vote?", "Why does everybody typedef over standard C types?", "An English word describing a pseudo-job", "When flying on a very tight schedule, are you oblidge to run a to make it to the next gate on a connection?", "Does 1px have a standard size?"]

export default function Rightbar() {
    return (
        <VStack width="30%" h="100vh" bg="#fafafa" px="1rem" overflowY="scroll" layerStyle={'scrollbar'}>
            <Flex py="1rem" position="relative" w="100%">
                <Text fontSize="5rem" fontWeight="bold" color="#f0f0f0">jobs</Text>
                <Text position="absolute" top="45%" fontSize="xl" fontWeight="medium" color="#9f9f9f">Looking out for...</Text>
            </Flex>
            <VStack w="100%" spacing="1rem">
                {jobs && jobs.map((job, index) => (
                    <Job key={index} position={job.position} company={job.company} location={job.location} pay={job.pay} type={job.type} tags={job.tags} />
                ))}
                <Text color="#3498db" fontWeight="medium" fontSize="0.6rem">VIEW ALL JOBS</Text>
            </VStack>
            <Flex py="1rem" position="relative" w="100%">
                <Text fontSize="5rem" fontWeight="bold" color="#f0f0f0">hot</Text>
                <Text position="absolute" top="45%" fontSize="xl" fontWeight="medium" color="#9f9f9f">Network Questions</Text>
            </Flex>
            <VStack w="100%" alignItems="flex-start">
                {questions && questions.map((question, index) => (
                    <Question key={index} question={question} />
                ))}
            </VStack>
        </VStack>
    )
}
