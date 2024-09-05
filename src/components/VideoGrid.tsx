import { VideoCard } from "./VideoCard"
const VIDEOS = [{
    title:"What Projects do you create to get 50 LPA in AI | AI Projects",
     image:"thumbnail.jpg",
     channelImage:"profile_channel.jpg",
     author:"Ayush Singh",
     views:"45 Mn",
     timestamp:"2 days ago"
},
{
    title:"Learn AI from Ayush Sigh | AI Projects",
     image:"thumbnail.jpg",
     channelImage:"profile_channel.jpg",
     author:"Ayush Singh",
     views:"45 Mn",
     timestamp:"2 days ago"
},
{
    title:"How to get into Top FANG Company by Learning ML",
     image:"thumbnail.jpg",
     channelImage:"profile_channel.jpg",
     author:"Ayush Singh",
     views:"45 Mn",
     timestamp:"2 days ago"
},{
    title:"How to get into Top FANG Company by Learning ML",
     image:"thumbnail.jpg",
     channelImage:"profile_channel.jpg",
     author:"Ayush Singh",
     views:"45 Mn",
     timestamp:"2 days ago"
},{
    title:"How to get into Top FANG Company by Learning ML",
     image:"thumbnail.jpg",
     channelImage:"profile_channel.jpg",
     author:"Ayush Singh",
     views:"45 Mn",
     timestamp:"2 days ago"
},{
    title:"How to get into Top FANG Company by Learning ML",
     image:"thumbnail.jpg",
     channelImage:"profile_channel.jpg",
     author:"Ayush Singh",
     views:"45 Mn",
     timestamp:"2 days ago"
},{
    title:"How to get into Top FANG Company by Learning ML",
     image:"thumbnail.jpg",
     channelImage:"profile_channel.jpg",
     author:"Ayush Singh",
     views:"45 Mn",
     timestamp:"2 days ago"
},{
    title:"How to get into Top FANG Company by Learning ML",
     image:"thumbnail.jpg",
     channelImage:"profile_channel.jpg",
     author:"Ayush Singh",
     views:"45 Mn",
     timestamp:"2 days ago"
},{
    title:"How to get into Top FANG Company by Learning ML",
     image:"thumbnail.jpg",
     channelImage:"profile_channel.jpg",
     author:"Ayush Singh",
     views:"45 Mn",
     timestamp:"2 days ago"
},{
    title:"How to get into Top FANG Company by Learning ML",
     image:"thumbnail.jpg",
     channelImage:"profile_channel.jpg",
     author:"Ayush Singh",
     views:"45 Mn",
     timestamp:"2 days ago"
},{
    title:"How to get into Top FANG Company by Learning ML",
     image:"thumbnail.jpg",
     channelImage:"profile_channel.jpg",
     author:"Ayush Singh",
     views:"45 Mn",
     timestamp:"2 days ago"
},{
    title:"How to get into Top FANG Company by Learning ML",
     image:"thumbnail.jpg",
     channelImage:"profile_channel.jpg",
     author:"Ayush Singh",
     views:"45 Mn",
     timestamp:"2 days ago"
},{
    title:"How to get into Top FANG Company by Learning ML",
     image:"thumbnail.jpg",
     channelImage:"profile_channel.jpg",
     author:"Ayush Singh",
     views:"45 Mn",
     timestamp:"2 days ago"
},{
    title:"How to get into Top FANG Company by Learning ML",
     image:"thumbnail.jpg",
     channelImage:"profile_channel.jpg",
     author:"Ayush Singh",
     views:"45 Mn",
     timestamp:"2 days ago"
},{
    title:"How to get into Top FANG Company by Learning ML",
     image:"thumbnail.jpg",
     channelImage:"profile_channel.jpg",
     author:"Ayush Singh",
     views:"45 Mn",
     timestamp:"2 days ago"
},{
    title:"How to get into Top FANG Company by Learning ML",
     image:"thumbnail.jpg",
     channelImage:"profile_channel.jpg",
     author:"Ayush Singh",
     views:"45 Mn",
     timestamp:"2 days ago"
},{
    title:"How to get into Top FANG Company by Learning ML",
     image:"thumbnail.jpg",
     channelImage:"profile_channel.jpg",
     author:"Ayush Singh",
     views:"45 Mn",
     timestamp:"2 days ago"
},{
    title:"How to get into Top FANG Company by Learning ML",
     image:"thumbnail.jpg",
     channelImage:"profile_channel.jpg",
     author:"Ayush Singh",
     views:"45 Mn",
     timestamp:"2 days ago"
},{
    title:"How to get into Top FANG Company by Learning ML",
     image:"thumbnail.jpg",
     channelImage:"profile_channel.jpg",
     author:"Ayush Singh",
     views:"45 Mn",
     timestamp:"2 days ago"
},{
    title:"How to get into Top FANG Company by Learning ML",
     image:"thumbnail.jpg",
     channelImage:"profile_channel.jpg",
     author:"Ayush Singh",
     views:"45 Mn",
     timestamp:"2 days ago"
},{
    title:"How to get into Top FANG Company by Learning ML",
     image:"thumbnail.jpg",
     channelImage:"profile_channel.jpg",
     author:"Ayush Singh",
     views:"45 Mn",
     timestamp:"2 days ago"
},{
    title:"How to get into Top FANG Company by Learning ML",
     image:"thumbnail.jpg",
     channelImage:"profile_channel.jpg",
     author:"Ayush Singh",
     views:"45 Mn",
     timestamp:"2 days ago"
},{
    title:"How to get into Top FANG Company by Learning ML",
     image:"thumbnail.jpg",
     channelImage:"profile_channel.jpg",
     author:"Ayush Singh",
     views:"45 Mn",
     timestamp:"2 days ago"
},{
    title:"How to get into Top FANG Company by Learning ML",
     image:"thumbnail.jpg",
     channelImage:"profile_channel.jpg",
     author:"Ayush Singh",
     views:"45 Mn",
     timestamp:"2 days ago"
},{
    title:"How to get into Top FANG Company by Learning ML",
     image:"thumbnail.jpg",
     channelImage:"profile_channel.jpg",
     author:"Ayush Singh",
     views:"45 Mn",
     timestamp:"2 days ago"
},{
    title:"How to get into Top FANG Company by Learning ML",
     image:"thumbnail.jpg",
     channelImage:"profile_channel.jpg",
     author:"Ayush Singh",
     views:"45 Mn",
     timestamp:"2 days ago"
},
{
    title:"How to get into Top FANG Company by Learning ML",
     image:"thumbnail.jpg",
     channelImage:"profile_channel.jpg",
     author:"Ayush Singh",
     views:"45 Mn",
     timestamp:"2 days ago"
}]


export const VideoGrid = () => {
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {
            VIDEOS.map(video => <div>
                <VideoCard title={video.title}
                            image={video.image}
                            channelImage={video.channelImage}
                            author={video.author}
                            views={video.views}
                            timestamp={video.timestamp}/>
            </div>)
        }
        
    </div>

}