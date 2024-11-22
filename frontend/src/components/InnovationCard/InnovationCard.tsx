import {
  Card,
  Image,
  Link,
  Skeleton,
  SkeletonText,
  Text,
} from "@chakra-ui/react";
import { Post } from "../../utils/types";
import { useData } from "../../utils/dataContext/dataContext";
import { globalVariables } from "../../utils/globalVariables";
import { useState } from "react";
interface InnovationCardProps {
  isLoaded: boolean;
  data?: Post;
}

const InnovationCard: React.FC<InnovationCardProps> = ({ isLoaded, data }) => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const { dataLoading } = useData();
  !data &&
    (data = {
      id: 1,
      title: "daniel Kahneman, Nobel Prize-winning psychologist, 1934-2024",
      Description:
        'Three people have been released, but the situation "is not over yet", police in the city of Ede say.',
      source: "BBC.com",
      time: 4,
      articleLink: "https://www.bbc.com/news/world-europe-68698022",
      image1:
        "https://news.google.com/api/attachments/CC8iK0NnNWhiUzF6VjBrelprMTJUalJIVFJDZkF4ampCU2dLTWdZVk1KUnBHUWs=-w280-h168-p-df-rw",
      image2:
        "https://i.zedtranslate.com/newsimage/CC8iK0NnNWhiUzF6VjBrelprMTJUalJIVFJDZkF4ampCU2dLTWdZVk1KUnBHUWs",
      category: "world",
      clicks: 283,
    });

  return (
    <Card p={4} >
      <Link fontSize={"20"} fontWeight={"800"}>
        <Skeleton
          width="full"
          isLoaded={!dataLoading && imgLoaded}
          fadeDuration={globalVariables.skeletionFade}
          minH="220px"
        >
          <Image src={data.image2} onLoad={() => setImgLoaded(true)} />{" "}
        </Skeleton>
        <SkeletonText
          isLoaded={!dataLoading}
          skeletonHeight="9"
          noOfLines={1}
          fadeDuration={globalVariables.skeletionFade}
        >
          <Text noOfLines={3}>{data.title}</Text>
        </SkeletonText>
      </Link>{" "}
      <SkeletonText
        isLoaded={!dataLoading}
        skeletonHeight="4"
        noOfLines={3}
        fadeDuration={globalVariables.skeletionFade}
      >
        <Text noOfLines={4}>{data.Description}</Text>{" "}
      </SkeletonText>
      <br />
      <SkeletonText isLoaded={!isLoaded}>
        <Text>
          {data.time} hrs ago | <span style={{ fontWeight: "bold" }}>NEWS</span>{" "}
          England
        </Text>{" "}
      </SkeletonText>
    </Card>
  );
};

export default InnovationCard;
