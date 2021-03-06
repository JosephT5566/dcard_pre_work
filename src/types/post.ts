export interface IPost {
    id: number
    postAvatar: string
    forumName: string
    title: string
    excerpt: string
    createAt: string
    media: { url: string }[]
}

// const test = {
//     id: 237866383,
//     title: '不是你啦',
//     excerpt: '',
//     anonymousSchool: false,
//     anonymousDepartment: false,
//     pinned: false,
//     forumId: 'bede7d5f-f946-4bd4-81bc-f4113faf9599',
//     replyId: null,
//     createdAt: '2022-01-10T10:24:09.935Z',
//     updatedAt: '2022-01-10T10:24:09.935Z',
//     commentCount: 36,
//     likeCount: 3876,
//     withNickname: true,
//     tags: [],
//     topics: ['梗圖', '迷因', '搞笑', '時事', '狗'],
//     meta: { layout: 'image', isModerator: true },
//     globalPinned: null,
//     forumName: '個人看板',
//     forumAlias: 'persona_drymao',
//     nsfw: false,
//     gender: 'M',
//     school: '獅子王辛巴',
//     department: 'drymao',
//     replyTitle: null,
//     mediaMeta: [
//         {
//             id: 'b8c3c235-e819-440e-9336-c19b0c742aad',
//             url: 'https://megapx-assets.dcard.tw/images/7fb68762-ea0b-4939-959d-48edfe2e5c0b/1280.jpeg',
//             normalizedUrl:
//                 'https://megapx.dcard.tw/v1/images/7fb68762-ea0b-4939-959d-48edfe2e5c0b',
//             thumbnail:
//                 'https://megapx-assets.dcard.tw/images/7fb68762-ea0b-4939-959d-48edfe2e5c0b/160.jpeg',
//             type: 'image/megapx',
//             tags: [],
//             createdAt: '2022-01-10T10:24:09.935Z',
//             updatedAt: '2022-01-10T10:24:09.935Z',
//             width: 749,
//             height: 1331,
//             croppingWindow: { anchorX: 0, anchorY: 276, width: 749, height: 998 },
//         },
//     ],
//     reactions: [
//         { id: '286f599c-f86a-4932-82f0-f5a06f1eca03', count: 3387 },
//         { id: 'e8e6bc5d-41b0-4129-b134-97507523d7ff', count: 465 },
//         { id: '514c2569-fd53-4d9d-a415-bf0f88e7329f', count: 18 },
//         { id: '4b018f48-e184-445f-adf1-fc8e04ba09b9', count: 3 },
//         { id: 'aa0d425f-d530-4478-9a77-fe3aedc79eea', count: 2 },
//         { id: '011ead16-9b83-4729-9fde-c588920c6c2d', count: 1 },
//     ],
//     isPersonaPagePost: true,
//     hidden: false,
//     customStyle: null,
//     isSuspiciousAccount: false,
//     isModerator: true,
//     layout: 'image',
//     spoilerAlert: false,
//     isSelectedPost: false,
//     isSuspicious: false,
//     leaderboardCategoryId: '29554c5d-229e-4439-a757-74c31ca8e6e7',
//     leaderboardCategoryName: '有趣',
//     enableNestedComment: true,
//     totalCommentCount: 61,
//     canAppearOnPopularList: true,
//     withImages: true,
//     withVideos: false,
//     media: [],
//     reportReasonText: '',
//     supportedReactions: null,
//     excerptComments: [],
//     edited: false,
//     postAvatar:
//         'https://megapx-assets.dcard.tw/images/806ef7a8-882f-472e-a2c6-0e7fa5dba189/full.jpeg',
//     activityAvatar: '',
//     verifiedBadge: false,
//     memberType: '',
// }
