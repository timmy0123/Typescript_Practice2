import React from 'react'
import { Stack,Box } from '@mui/material';
import { VideoCard,ChannelCard} from './';

type idtype = {
  kind:string;
  videoId?:string;
  channelId?:string;
}
type snippettype = {
  channelId:string;
  channelTitle:string;
  description:string;
  liveBroadcastContent:string;
  publishTime:string;
  publishedAt:string;
  thumbnails:{default:{height:number;url:string;width:number;};
              high:{height:number;url:string;width:number;};
              maxres:{height:number;url:string;width:number;};
              medium:{height:number;url:string;width:number;};
              standard:{height:number;url:string;width:number;};
              };
  title:string;
}
type partype = {
  id:idtype;
  kind:string;
  snippet:snippettype;
}
type videotype = {
  videos:partype[];
  indirection?:any;
}
const Videos:React.FC<videotype> = ({ videos,indirection }) => {
  return (
    <Stack direction={indirection || 'row'} flexWrap="wrap" justifyContent="start" gap={2}>
        {videos.map((item,idx) => (
            <Box key={idx}>
                {item.id.videoId && <VideoCard video={item} />}
                {item.id.channelId && <ChannelCard channelDetail={item} />}
            </Box>
        ))}
    </Stack>
  )
}

export default Videos