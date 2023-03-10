// ==UserScript==
// @name         SimplifiedChineseDeepRacer
// @namespace    SimplifiedChineseDeepRacer
// @version      1.0.3
// @description  Translates DeepRacer console into Simplified Chinese
// @author       jdaped
// @match        https://*.console.aws.amazon.com/deepracer/*
// @updateURL    https://jeremypedersen.com/resources/tampermonkey/SimplifiedChineseDeepRacer.user.js
// @downloadURL  https://jeremypedersen.com/resources/tampermonkey/SimplifiedChineseDeepRacer.user.js
// ==/UserScript==

// This timeout is a "hack" to wait for the page to load
// TODO: Find a more elegant way to wait for page load
setTimeout(function () {

    var replaceArray = [
		[/The Virtual League Golden Badge signifies the current Pro Division monthly finale title holder. The badge is displayed on the winning racer’s profile and next to their racer name on Pro Division leaderboards for as long as that racer tops the leaderboard. If a new racer takes the title in a following race, the former titleholder’s badge becomes silver to celebrate that racer’s status as a past title holder./gi, 'Virtual League Golden Badge 表示当前专业赛每月决赛冠军的持有者。 只要该赛车手在排行榜上名列前茅，徽章就会显示在获胜赛车手的个人资料上，并显示在 Pro Division 排行榜上他们的赛车手姓名旁边。 如果新赛车手在接下来的比赛中获得冠军，前冠军的徽章将变成银色，以庆祝该赛车手作为过去的冠军持有者的地位。'],
		[/Organizations can activate multi-user mode to sponsor and manage multiple racer profiles under one AWS account ID. Costs related to sponsored racers’ training hours and storage are billed to the sponsor’s account. Sponsors can view the usage of their sponsored profiles in the dashboard and can pause sponsorship of profiles at any time. This feature is particularly useful for organizations wishing to plan large events./gi, '组织可以激活多用户模式，以在一个亚马逊云科技账户 ID 下赞助和管理多个赛车手资料。 与赞助赛车手的训练时间和存储相关的费用记入赞助商的账户。 赞助商可以在仪表板中查看其赞助资料的使用情况，并可以随时暂停赞助资料。 此功能对于希望策划大型活动的组织特别有用。'],
		[/The Pro Division is for racers who have earned a top 10% time trial result from the previous month. Racers in the Pro Division earn bigger rewards and can compete in the monthly finale for qualifying seats in the yearly AWS re:Invent Championship Cup. Pro Division racers compete in more complex racing formats, such as head-to-head or object avoidance, which require stereo camera or LiDAR sensor configurations./gi, '专业赛面向上个月在计时赛中获得前 10% 成绩的赛车手。 专业赛的赛车手可以获得更大的奖励，并且可以参加每月决赛，争夺年度 AWS re:Invent 总决赛的资格席位。 专业赛赛车手参加更复杂的比赛形式，例如正面交锋或避障，这需要立体摄像头或 LiDAR 传感器配置。'],
		[/Congratulations to I-Lee from the National Yang Ming Chiao Tung University in Taiwan and the over 150,000 developers from over 160 countries who participated in the 2022 AWS DeepRacer League! Compete in the 2023 season to win a trip to Las Vegas and a chance to earn over \$20,000\! Start training your model now to secure your spot when League opens on March 1, 2023./gi, '恭喜来自台湾国立阳明交通大学的 I-Lee 和来自 160 多个国家的超过 150,000 名开发者参加了 2022 AWS DeepRacer League！ 参加 2023 赛季，赢取拉斯维加斯之旅，并有机会赚取超过 20,000 美元！ 立即开始训练您的模型，以在 2023 年 3 月 1 日联赛开幕时确保您的位置。'],
		[/Community project that leverages OpenCV image-processing capabilities to detect a mouse in the image from an infrared camera mounted on the DeepRacer. The infrared camera allows the RoboCat to detect the mouse in the dark and scare it away using a pre-configured action space with 3 actions (move forward if a mouse is detected, move back after previous action, and remain stationary)./gi, '利用 OpenCV 图像处理功能从安装在 DeepRacer 上的红外摄像机检测图像中的鼠标的社区项目。 红外摄像头允许 RoboCat 在黑暗中检测到老鼠，并使用具有 3 个动作的预配置动作空间将其吓跑（如果检测到鼠标则向前移动，在上一个动作后向后移动，并保持静止）。'],
		[/The new league structure splits the current Virtual Circuit monthly leaderboard into two skill-based divisions, each with their own prizes to maintain a high level of competitiveness in the League. The Open Division is where all racers begin their ML learning journey. Participation is rewarded each month with new digital rewards. Open Division racers compete in the time trial format./gi, '新的联盟结构将当前的虚拟赛车场月度排行榜分为两个基于技能的部分，每个部分都有自己的奖品，以保持联盟的高水平竞争力。 公开赛是所有赛车手开始 ML 学习之旅的地方。 参与每个月都会获得新的数字奖励。 Open Division 赛车手参加计时赛。'],
		[/With a multi-user account setup, organizers \(such as account administrators\) can provide participants access to AWS DeepRacer under their account ID. They can also monitor spending on training and storage, enable and disable training, and view and manage models for every user in their account from the AWS DeepRacer console./gi, '通过多用户账户设置，组织者（例如账户管理员）可以为参与者提供其账户 ID 下的 AWS DeepRacer 访问权限。 他们还可以从 DeepRacer 控制台监控训练和存储支出、启用和禁用训练，以及查看和管理其账户中每个用户的模型。'],
		[/you will receive 10 free hours to train or evaluate models and 5GB of free storage during your first month. This is enough to train your first time-trial model, evaluate it, tune it, and then enter it into the AWS DeepRacer League. This offer is valid for 30 days after you have used the service for the first time./gi, '您将在第一个月内获得 10 小时的免费时间来训练或评估模型以及 5GB 的免费存储空间。 这足以训练您的第一个计时模型、对其进行评估、调整，然后将其输入 DeepRacer League。 此优惠在您首次使用该服务后的 30 天内有效。'],
		[/Multi-racer competition (driving slower if another DeepRacer is in front of the car or overtaking other cars using the LIDAR sensor), autonomous vehicle, using AI for safety and perception (training the car to stop when a person or animal walks in front of it and detecting and staying within the bounds of a lane)./gi, '多人竞赛（如果另一个 DeepRacer 在车前，则驾驶速度较慢或使用 LIDAR 传感器超越其他车辆），自动驾驶汽车，使用 AI 确保安全和感知（训练汽车在人或动物走在前面时停下来 它并检测并保持在车道范围内）。'],
		[/Mimics a real-world car that starts and stops at traffic lights and stop signs. The logic for identifying different colors in traffic signals and detect stop signs was developed by combining various computer vision capabilities, including OpenCV image-processing functions and object-detection machine learning models./gi, '模仿在交通信号灯和停车标志处启动和停止的真实世界汽车。 通过结合各种计算机视觉功能，包括 OpenCV 图像处理功能和对象检测机器学习模型，开发了识别交通信号中不同颜色和检测停车标志的逻辑。'],
		[/The Pro division is for racers who have earned a top 10% time trial result from the previous month. Racers in the Pro Division can earn bigger rewards and win qualifying seats for the 2022 AWS re:Invent Championship Cup. Pro Division racers compete in object avoidance and head-to-head formats./gi, '专业组是为上个月在计时赛中获得前 10% 成绩的赛车手设立的。专业赛部的赛车手可以获得更大的奖励，并赢得 2022 re:Invent Championship Cup 的资格席位。 专业赛部赛车手以躲避物体和正面交锋的形式进行比赛。'],
		[/The Pro Division monthly finale takes place on the AWS DeepRacer official Twitch channel. Winners automatically secure a spot in the Championship Cup and a trip to AWS re:Invent to compete for \$10,000 in AWS credits, and an F1 experience or a \$20,000 value ML education sponsorship./gi, '专业部月度决赛在 DeepRacer 官方 Twitch 频道上举行。 获胜者将自动获得冠军杯的席位和亚马逊云科技 re:Invent 之旅，以争夺 10,000 美元的 AWS 积分、F1 体验或价值 20,000 美元的 ML 教育赞助。'],
		[/is a component of the AWS DeepRacer console, where you can choose to customize your agent with supported sensor units, an action space, a neural network topology, and a customized appearance for training RL models to run on a DeepRacer vehicle. In other words, you build or maintain your agent in/gi, '是 DeepRacer 控制台的一个组件，您可以在其中选择使用支持的传感器单元、操作空间、神经网络拓扑和自定义外观来自定义您的代理，以训练 RL 模型在 DeepRacer 车辆上运行。 换句话说，您在'],
		[/Learn to deploy an object detection model that enables the AWS DeepRacer device to identify and follow an object. Extend this sample project by modifying the code to recognize other objects for your use case. Bring your own custom model, navigation logic, and add-on hardware/gi, '学习部署一个物体检测模型，使亚马逊云科技 DeepRacer 设备能够识别和跟踪物体。 通过修改代码以识别您的用例的其他对象来扩展此示例项目。 使用您自己的自定义模型、导航逻辑和附加硬件'],
		[/The new AWS DeepRacer League structure splits the current Virtual Circuit monthly leaderboard into two skill-based divisions, Pro and Open. Each division offers its own racing formats and opportunities for prizes to maintain a high level of overall competitiveness./gi, '新的亚马逊云科技 DeepRacer League 结构将当前的虚拟赛车场月度排行榜分为两个基于技能的部门，Pro 和 Open。 每个部门都提供自己的比赛形式和奖品机会，以保持高水平的整体竞争力。'],
		[/Welcome to the world’s first global autonomous racing league, open to anyone. Race for prizes, glory, and a chance to advance to the AWS DeepRacer Championship Cup at re:Invent. Get on the track to compete online in the monthly Virtual Circuit races./gi, '欢迎来到世界上第一个面向所有人开放的全球自动驾驶赛车联盟。 争夺奖品、荣耀，并有机会晋级 re:Invent 的 亚马逊云科技 DeepRacer 冠军杯。 踏上赛道，参加每月一次的虚拟巡回赛在线比赛。'],
		[/Use a series of QR codes as waypoints to navigate the AWS DeepRacer around a custom path. Create your own custom path by placing the basic waypoint codes as a sequence along the track or encode additional instructions in them to invent new applications./gi, '使用一系列 QR 码作为路标，围绕自定义路径导航 DeepRacer。 通过将基本航路点代码作为轨道上的序列放置或在其中编码其他指令以发明新应用程序来创建您自己的自定义路径。'],
		[/Winners of the Pro Division monthly finale automatically secure a spot in the Championship Cup and a trip to AWS re:Invent to compete for \$10,000 in AWS credits, as well as an F1 experience or a \$20,000-value ML education sponsorship./gi, '专业赛月度决赛的获胜者将自动获得冠军杯的席位和 AWS re:Invent 之旅以争夺 10,000 美元的 AWS 积分，以及 F1 体验或价值 20,000 美元的 ML 教育赞助。'],
		[/In this project, use the AWS DeepRacer car to draw a map with SLAM (Simultaneous Localization and Mapping), a technique for creating a map of an environment by estimating a device’s current location as it moves through a space./gi, '在此项目中，使用 DeepRacer 汽车通过 SLAM（同步定位和映射）绘制地图，SLAM 是一种通过估计设备在空间中移动时的当前位置来创建环境地图的技术。'],
		[/The AWS DeepRacer Free Tier provides 10 free hours to train or evaluate models and 5GB of free storage during your first 30 days to create, train, evaluate, and submit your model to the Virtual Circuit./gi, 'AWS DeepRacer 免费套餐提供 10 小时的免费时间来训练或评估模型，并在您的前 30 天内提供 5GB 的免费存储空间，用于创建、训练、评估模型并将您的模型提交到 Virtual Circuit。'],
		[/Configure your vehicle with one or more sensors, choose a neural network topology, and customize the action space to meet your racing criteria. Customize your vehicle's appearance for personalized visualization in training./gi, '使用一个或多个传感器配置您的车辆，选择神经网络拓扑结构，并自定义动作空间以满足您的赛车标准。 自定义您的车辆外观，以在训练中实现个性化可视化。'],
		[/Pro Division participants receive the same customization given to Open Division participants plus 1 exclusive Pro car customization per month. Example rewards include new body shells, custom paint colors, and designer wraps./gi, '专业赛参赛者将获得与公开赛参赛者相同的定制，外加每月 1 辆独家 Pro 汽车定制。 示例奖励包括新车身外壳、定制油漆颜色和设计师包装。'],
		[/Reinforcement Learning \(RL\) is the Machine Learning technique which drives AWS DeepRacer. Learn the basics of RL to create and optimize your models to compete in the AWS DeepRacer League./gi, '强化学习 (RL) 是驱动 DeepRacer 的机器学习技术。了解 RL 的基础知识以创建和优化您的模型以在 DeepRacer League 中竞争。'],
		[/pane, you can view the racer profiles you are sponsoring. You can edit usage quotas for training hours, delete sponsored users' models, as well as pause and resume sponsorship of selected users./gi, '窗格中，您可以查看您赞助的赛车手资料。 您可以编辑培训时间的使用配额、删除赞助用户的模型以及暂停和恢复选定用户的赞助。'],
		[/All racers begin their ML learning journey in the Open Division. Open Division racers compete in the time trial format and receive monthly digital rewards for participation./gi, '所有赛车手都在公开赛开始他们的 ML 学习之旅。 Open Division 赛车手以计时赛的形式参加比赛，并每月获得参与的数字奖励。'],
		[/Host a race privately or broadcast it publicly to machine learning enthusiasts around the globe. Invite your colleagues, classmates, or friends by sharing a race invitation link./gi, '私下举办比赛或向全球机器学习爱好者公开直播。 通过分享比赛邀请链接来邀请您的同事、同学或朋友。'],
		[/Request a 60 minute online or in-person workshop on reinforcement learning with AWS DeepRacer. Participants learn how to create, train, and improve their models./gi, '申请 60 分钟的在线或面对面研讨会，了解使用 DeepRacer 进行强化学习。 参与者学习如何创建、训练和改进他们的模型。'],
		[/Open Division monthly winners are promoted to the Pro Division where they can compete for the Pro Division title and Virtual League Golden Badge./gi, '公开赛每月获胜者将晋升到专业赛，在那里他们可以争夺 Pro Division 冠军和 Virtual League Golden Badge。'],
		[/Identify the most dominant topics associated with your products, policies, events, and brands by launching this solution that uses Amazon Rekognition./gi, '通过启动此使用 Amazon Rekognition 的解决方案，确定与您的产品、政策、活动和品牌相关的最主要主题。'],
		[/Demo Amazon Personalize for free with the highly interactive Magic Movie Machine to generate personalized movie recommendations in real time./gi, '使用高度交互的 Magic Movie Machine 免费演示 Amazon Personalize，以实时生成个性化电影推荐。'],
		[/Open Division participants receive 1 car customization per month. Example rewards include new body shells, custom paint colors, and designer wraps./gi, '公开赛参与者每月可获得 1 辆汽车定制服务。 示例奖励包括新车身外壳、定制油漆颜色和设计师包装。'],
		[/With AWS DeepRacer, you are charged for storage, and training and evaluation jobs. Model training and evaluation is charged at a flat fee of \$/gi, '使用 DeepRacer的时候，您需要为存储、训练和评估工作付费。模型训练和评估的固定费用为'],
		[/in the world and a chance to advance and win the AWS DeepRacer Championship Cup. Earn new digital rewards such as custom shells/gi, '并有机会晋级并赢得 AWS DeepRacer 冠军杯。 每月参加比赛即可获得新的数字奖励，例如定制外壳和涂装。'],
		[/Build fun applications (use the DeepRacer as a digital pet or follow an object) or industrial prototypes (warehousing, manufacturing)./gi, '构建有趣的应用程序（将 DeepRacer 用作数字宠物或跟随物体）或工业原型（仓储、制造）。'],
		[/The AWS DeepRacer League has over \*5x more\* chances to win prizes than ever before. Race for prizes and glory from anywhere/gi, 'DeepRacer League 赢得奖品的机会比以往任何时候都多*5 倍*。 在世界任何地方争夺奖品和荣耀，'],
		[/pros, where you can win big prizes such as an AWS DeepRacer Evo device and a chance for an expenses paid trip to re:Invent to/gi, '在那里您可以赢取 DeepRacer Evo 设备等大奖，并有机会参加 re:Invent 的付费旅行，'],
		[/Develop navigation systems for home robots, such as vacuum cleaners, a fleet of mobile warehouse robots, or parking a self-driving car./gi, '为家用机器人开发导航系统，例如真空吸尘器、移动仓库机器人车队或自动驾驶汽车停车位。'],
		[/racing league, driven by reinforcement learning. Compete and connect with racers from 6 continents and 115 countries./gi, '这是世界上第一个由强化学习驱动的全球自动驾驶赛车联赛。 与来自 6 区域和 115 个国家/地区的赛车手竞争并联系。'],
		[/Disabling multi-user mode will prevent any new profile creation and training under the DeepRacer administrator's AWS account./gi, '禁用多用户模式将阻止在 DeepRacer 管理员的亚马逊云科技账户下创建和训练任何新的配置文件。'],
		[/AWS DeepRacer has an integrated simulation environment hosted on the AWS Cloud for experimentation and optimization of/gi, '亚马逊云科技 DeepRacer 有一个托管在 AWS 云上的集成模拟环境，用于试验和优化您的自主赛车模型，'],
		[/pane, you can view a summary of estimated spending based on the number of sponsored users and their training hours as well as storage./gi, '窗格中，您可以查看基于赞助用户数量及其培训时数和存储空间的估计支出摘要。'],
		[/Simply follow the steps in the console to build, train and evaluate your model and enter the AWS DeepRacer League. With/gi, '只需按照控制台中的步骤构建、训练和评估您的模型，即可进入 DeepRacer League。 使用'],
		[/Code, create, and collaborate with our GitHub community to make your AWS DeepRacer more than the sum of its parts./gi, '编码、创建并与我们的 GitHub 社区协作，让您的亚马逊云科技 DeepRacer 超越其各个部分的总和。'],
		[/and paintjobs for competing each month. Top the ranks in open division to earn exclusive DeepRacer merchandise and advance to the/gi, '在公开赛中名列前茅，赢取独家 DeepRacer 商品并晋级职业选手，'],
		[/a variety of practical business problems from robotics automation, to finance, to game optimization, and autonomous vehicles./gi, '非常适合解决机器人自动化、金融、游戏优化和自动驾驶汽车等各种实际业务问题。'],
		[/Submit your trained model to the virtual leaderboard to enter the AWS DeepRacer League, the world’s first global autonomous/gi, '将您经过训练的模型提交到虚拟排行榜，以进入 AWS DeepRacer 联赛，'],
		[/Launch this solution to learn how you can use Amazon Polly and Amazon Lex to create a multi-faceted chatbot./gi, '启动此解决方案以了解如何使用 Amazon Polly 和 Amazon Lex 创建多面聊天机器人。'],
		[/DeepDriver by Jochem Lugtenburg, Developer at Relive, Former DeepRacer Championship Cup finalist/gi, 'Jochem Lugtenburg 的 DeepDriver，Relive 的开发者，前 DeepRacer 冠军杯决赛入围者'],
		[/To make new applications using the open-source code, your AWS DeepRacer device needs to be on Ubuntu 20.04./gi, '要使用开源代码制作新应用程序，您的 DeepRacer 设备需要运行在 Ubuntu 20.04 上。'],
		[/Build your model, evaluate its performance on a virtual track, and then compete in the AWS DeepRacer League./gi, '构建您的模型，评估其在虚拟赛道上的表现，然后参加 AWS DeepRacer League 比赛。'],
		[/Take this free 90 minute training and certification course to start your machine learning journey with DeepRacer./gi, '参加这个 90 分钟的免费培训和认证课程，开始您的 DeepRacer 机器学习之旅。'],
		[/Try out this beginner tutorial to learn how to use Amazon Comprehend to analyze and derive insights from text./gi, '试用此初学者教程，了解如何使用 Amazon Comprehend 分析文本并从中获取见解。'],
		[/guidance on building reinforcement learning models. Reinforcement learning is a branch of machine learning, ideal for/gi, '和构建强化学习模型的指导开始机器学习。 强化学习是机器学习的一个分支，'],
		[/AWS DeepRacer allows developers of any skill level to get started with machine learning with hands-on tutorials and/gi, '亚马逊云科技 DeepRacer 允许任何技能水平的开发人员通过动手教程'],
		[/your autonomous racing models, built with reinforcement learning. Train your models and get ready to race in the League./gi, '该模型是通过强化学习构建的。 训练您的模型并准备好参加联赛。'],
		[/A community race is a private virtual race that you can share with your fellow AWS DeepRacer friends. Select/gi, '社区比赛是一种私人虚拟比赛，您可以与其他 AWS DeepRacer 朋友分享。选择'],
		[/Get hands-on with a fully autonomous 1\/18th scale race car driven by reinforcement learning, 3D racing simulator,/gi, '亲身体验由强化学习、3D 赛车模拟器驱动的全自动 1/18 比例赛车，'],
		[/Try AWS DeepRacer Arcade for mobile, a free browser-based game that teaches ML basics./gi, '试用适用于移动设备的 AWS DeepRacer Arcade，这是一款基于浏览器的免费游戏，可教授 ML 基础知识。'],
		[/Use our email template to invite users to participate in fast-paced racing action with AWS DeepRacer./gi, '使用我们的电子邮件模板邀请用户使用 AWS DeepRacer 参加快节奏的赛车活动。'],
		[/Get the latest AWS DeepRacer news and share tips and tricks with our community of racers./gi, '获取最新的 亚马逊云科技 DeepRacer 新闻并与我们的赛车手社区分享提示和技巧。 阅读博客'],
		[/Student community races are available to all students with a AWS DeepRacer Student account./gi, '所有拥有亚马逊云科技 DeepRacer 学生账户的学生都可以参加学生社区比赛。'],
		[/Note: These robotics projects are not required to participate in the AWS DeepRacer League./gi, '注意：这些机器人项目不需要参加亚马逊云科技 DeepRacer League。'],
		[/Race on your own terms! Organize a private LIVE virtual event for your friends and peers./gi, '按照自己的方式比赛！ 为您的朋友和同龄人组织一场私人 LIVE 虚拟活动。'],
		[/Read instructions to find out if your AWS DeepRacer is already using Ubuntu 20.04/gi, '阅读说明以了解您的 AWS DeepRacer 是否已在使用 Ubuntu 20.04'],
		[/Use multi-user mode to provide and manage AWS Player accounts for multiple participants./gi, '使用多用户模式为多个参与者提供和管理亚马逊云科技 Player 帐户。'],
		[/Learn how to use Amazon Textract to extract text and structured data from a document./gi, '了解如何使用 Amazon Textract 从文档中提取文本和结构化数据。'],
		[/Learn how to translate text between languages in the cloud using Amazon Translate./gi, '了解如何使用 Amazon Translate 在云中的语言之间翻译文本。'],
		[/Create your first Amazon Lex chatbot that provides a few basic banking functions./gi, '创建您的第一个提供一些基本银行功能的 Amazon Lex 聊天机器人。'],
		[/Work with core AWS services such as AWS Amplify and more to create a web app./gi, '使用 AWS Amplify 等核心 AWS 服务来创建 Web 应用程序。'],
		[/Open from 4:18 AM on December 8 until 7:59 AM on February 1 GMT+8./gi, '开放时间为 12 月 8 日凌晨 4:18 至 2 月 1 日早上 7:59 GMT+8。'],
		[/Try out these experiences to learn new ML skills and more. Explore new experiences/gi, '尝试这些体验以学习新的 ML 技能等。 探索新体验'],
		[/Open from 8:00 AM on February 1 until 7:59 AM on March 1 GMT+8./gi, '开放时间为 2 月 1 日上午 8:00 至 3 月 1 日上午 7:59 GMT+8。'],
		[/This can take a few minutes, but you can build your ML skills while you wait/gi, '这可能需要几分钟时间，但您可以在等待期间培养您的 ML 技能'],
		[/Admin will keep access to all resources \(models, leaderboards, and cars\)./gi, '管理员将保留对所有资源（模型、排行榜和车）的访问权限。'],
		[/Create machine learning projects with Jupyter notebooks in your browser./gi, '在浏览器中使用 Jupyter 笔记本创建机器学习项目。'],
		[/Evaluate and compare your model's performance with new evaluation capabilities./gi, '使用新的评估功能评估和比较模型的性能。'],
		[/Ask questions, exchange tips, and share best practices with fellow racers./gi, '提出问题、交流技巧并与其他赛车手分享最佳实践。'],
		[/Looking to learn new ML skills after racing in AWS DeepRacer?/gi, '在参加亚马逊云科技 DeepRacer 比赛后想要学习新的 ML 技能？'],
		[/Community races are available to all customers through the AWS Console./gi, '所有客户都可以通过亚马逊云科技控制台参加社区比赛。'],
		[/Race takes place in AWS DeepRacer Student. Students need an/gi, '比赛在 AWS DeepRacer Student 中进行。 学生需要一个'],
		[/Check out our favorite projects or contribute your own on GitHub./gi, '查看我们最喜欢的项目或在 GitHub 上贡献您自己的项目。'],
		[/Enter the DeepRacer League Virtual Circuit for a chance to win./gi, '进入 DeepRacer League 虚拟巡回赛即有机会获胜。'],
		[/to create a community race for student racers or any type of racer./gi, '为学生赛车手或任何类型的赛车手创建社区比赛。'],
		[/AWS Player profiles still exist and can be sponsored by another/gi, '亚马逊云科技的玩家资料仍然存在，可以由另一个账号赞助'],
		[/to meet the requirements of your autonomous driving solution./gi, '中构建或维护您的代理，以满足您的自动驾驶解决方案的要求。'],
		[/page is a curation of ML projects and experiences for you to try out./gi, '是 ML 项目和体验的精选，供您尝试。'],
		[/Step 1: Take a crash course on Reinforcement Learning \(10min\)/gi, '第 1 步：参加强化学习速成课程（10 分钟）'],
		[/Try out demos, tutorials, and courses to build your ML skills./gi, '试用演示、教程和课程来培养您的 ML 技能。'],
		[/Create machine learning projects using Jupyter notebooks/gi, '使用 Jupyter notebooks创建机器学习项目'],
		[/Join an AWS DeepRacer League Virtual Circuit Race/gi, '加入亚马逊云科技 DeepRacer League 虚拟巡回赛'],
		[/Try out these experiences to learn new ML skills and more./gi, '尝试这些体验以学习新的 ML 技能等。'],
		[/Create one-click solutions for machine learning use cases./gi, '为机器学习用例创建一键式解决方案。'],
		[/Can you beat Championship Cup winner I-Lee in 2023/gi, '你能在 2023 年超过冠军杯冠军 I-Lee 吗'],
		[/Welcome to the 2023 AWS DeepRacer community races/gi, '欢迎参加 2023 年 DeepRacer 社区比赛'],
		[/Demos, tutorials, and courses to learn new ML skills./gi, '用于学习新 ML 技能的演示、教程和课程。'],
		[/Neural Compute Stick 2 for faster processing/gi, 'Neural Compute Stick 2 可加快处理速度'],
		[/AWS DeepRacer was built on existing AWS services/gi, 'DeepRacer 基于现有的亚马逊云科技服务构建'],
		[/for video streaming of virtual simulation footage, Amazon/gi, '用于虚拟模拟镜头视频流的,'],
		[/Request an AWS DeepRacer workshop \(5 mins\)/gi, '申请 AWS DeepRacer 研讨会（5 分钟）'],
		[/Create your own DeepRacer LIVE virtual race/gi, '创建您自己的 DeepRacer LIVE 虚拟比赛'],
		[/Quickly evaluate models in the 3D racing simulator/gi, '在 3D 赛车模拟器中快速评估模型'],
		[/AWS DeepRacer or AWS DeepRacer Evo/gi, '亚马逊云科技 DeepRacer 或 DeepRacer Evo'],
		[/The fastest way to get rolling with machine learning/gi, '使用机器学习的最快方法'],
		[/How to join a PRO\/OPEN Division race/gi, '如何参加 PRO/OPEN （专业部/公开部） 比赛'],
		[/Participate in monthly races to win new awards./gi, '参加每月的比赛以赢得新奖项。'],
		[/re:Invent 2022 Warm Up race participation/gi, 're:Invent 2022 热身赛参与'],
		[/Create a free web app using core services/gi, '使用核心服务创建免费的 Web 应用程序'],
		[/for reinforcement learning model training, AWS/gi, '与用于强化学习模型训练,'],
		[/Compete in the global Racing League/gi, '参加全球赛车 DeepRacer League'],
		[/Disable multi-user account mode \(1 min\)/gi, '禁用多用户帐户模式（1 分钟）'],
		[/Event creator can not take part in the race/gi, '活动创建者不能参加比赛'],
		[/Competing in the next virtual circuit race/gi, '参加下一场虚拟赛道比赛'],
		[/Join an AWS DeepRacer community race/gi, '加入 DeepRacer 社区比赛'],
		[/Racing divisions concepts and terminology/gi, '赛车部门的概念和术语'],
		[/Profiles monitoring will be deactivated./gi, '配置文件监控将被停用。'],
		[/Event creator can take part in the race/gi, '活动创建者可以参加比赛'],
		[/Welcome to the 2023 Virtual Circuit/gi, '欢迎来到 2022 虚拟巡回赛'],
		[/AWS DeepRacer Student account/gi, '亚马逊云科技 DeepRacer 学生账户'],
		[/to provide the racing simulator, Amazon/gi, '于提供赛车模拟器的,'],
		[/Get personalized movie recommendations/gi, '获得个性化的电影推荐'],
		[/Analyze and derive insights from text/gi, '分析文本并从中获得见解'],
		[/Dive deeper into reinforcement learning/gi, '深入研究强化学习'],
		[/AWS DeepRacer integrates with Amazon/gi, 'DeepRacer使用'],
		[/Join the AWS DeepRacer community/gi, '加入 DeepRacer 社区'],
		[/Get started with reinforcement learning/gi, '强化学习入门'],
		[/Training and evaluation hours used/gi, '使用的培训和评估小时数'],
		[/Race takes place in AWS Console/gi, '比赛在 AWS 控制台中进行'],
		[/AWS DeepRacer digital training/gi, 'DeepRacer 数字化培训'],
		[/DeepRacer League overview/gi, 'DeepRacer League 概览'],
		[/to invent your own application./gi, '来开发您自己的应用程序。'],
		[/Software and hardware for robotics/gi, '机器人软件和硬件'],
		[/Other admin actions \(5 mins\)/gi, '其他管理操作（5 分钟）'],
		[/Download physical car model/gi, '下载DeepRacer车的模型'],
		[/Order an AWS DeepRacer EVO/gi, '订购 DeepRacer EVO'],
		[/How AWS DeepRacer works/gi, 'AWS DeepRacer 的工作原理'],
		[/Get rolling with machine learning/gi, '开始使用机器学习'],
		[/View instructions on GitHub/gi, '查看 GitHub 上的说明'],
		[/compete in the Championship Cup./gi, '参加冠军杯比赛。'],
		[/LIVE monthly Twitch races/gi, '每月直播 Twitch 比赛'],
		[/for model storage, and Amazon/gi, '用于模型存储, 和'],
		[/The fastest way to learn ML/gi, '学习 ML 的最快方法'],
		[/Up to 2 competition formats/gi, '最多 2 种比赛形式'],
		[/and global racing league./gi, '和全球赛车 League'],
		[/Prerequisites \(10 mins\)/gi, '先决条件（10 分钟）'],
		[/Automate content translation/gi, '自动化内容翻译'],
		[/Buy AWS DeepRacer/gi, '购买亚马逊云科技 DeepRacer'],
		[/Race in the Virtual Circuit/gi, '参与虚拟赛车场'],
		[/Multi-user mode is enabled/gi, '多用户模式已启用'],
		[/Community Slack channel/gi, '社区 Slack 频道'],
		[/About the league/gi, '关于DeepRacer League'],
		[/Race for prizes and glory/gi, '为奖品和荣耀而战'],
		[/Your journey starts here/gi, '你的旅程从这里开始'],
		[/AWS DeepRacer Pricing/gi, 'DeepRacer 定价'],
		[/Virtual Circuit divisions/gi, '虚拟赛车场部门'],
		[/Step 2: Create a model/gi, '第 2 步：创建模型'],
		[/Connect with the community/gi, '与社区联系'],
		[/Automate data extraction/gi, '自动化数据提取'],
		[/Estimated spend \(USD\)/gi, '预计支出（美元）'],
		[/View invitation template/gi, '查看邀请模板'],
		[/Disable multi-user mode/gi, '禁用多用户模式'],
		[/and model storage is \$/gi, '和模型存储费是'],
		[/AWS Virtual Circuit/gi, '亚马逊云科技虚拟赛车场'],
		[/Create a community race/gi, '创建社区竞赛'],
		[/Neural network topology/gi, '神经网络拓扑'],
		[/Try a robotics project/gi, '尝试机器人项目'],
		[/Set up multi-user mode/gi, '设置多用户模式'],
		[/Enable multi-user mode/gi, '启用多用户模式'],
		[/Joining DeepRacer/gi, '加入 DeepRacer'],
		[/AWS DeepRacer/gi, '亚马逊云科技 DeepRacer'],
		[/Explore new experiences/gi, '探索新体验'],
		[/Student community race/gi, '学生社区竞赛'],
		[/Create community races/gi, '创建社区比赛'],
		[/Identify hot topics/gi, '识别热点话题和趋势'],
		[/AWS Developer forum/gi, 'AWS 开发者论坛'],
		[/Up to 3 race types/gi, '多达 3 种比赛类型'],
		[/Build a banker bot/gi, '建立一个银行家机器人'],
		[/AWS DeepRacer/gi, '亚马逊云科技DeepRacer'],
		[/Win trips and prizes/gi, '赢得旅行和奖品'],
		[/for log capture./gi, '以及用于日志捕获的集成'],
		[/Reinforcement learning/gi, '强化学习'],
		[/Multi-user management/gi, '多用户管理'],
		[/Initializing training/gi, '初始化训练'],
		[/Open Division rewards/gi, '公开赛奖励'],
		[/Features and benefits/gi, '特点和好处'],
		[/to access the race./gi, '才能访问比赛。'],
		[/Try computer vision/gi, '尝试计算机视觉'],
		[/Recommended add-on:/gi, '推荐附加组件：'],
		[/Time trial race type/gi, '计时赛类型'],
		[/Pro Division rewards/gi, '专业赛奖励'],
		[/Classic race format/gi, '经典比赛形式'],
		[/Your racer profile/gi, '你的赛车手资料'],
		[/Your racer profile/gi, '您的赛车手资料'],
		[/Try generative AI/gi, '尝试生成式 AI'],
		[/Live monthly races/gi, '直播每月比赛'],
		[/About PRO Division/gi, '关于专业赛部'],
		[/Start your engines/gi, '启动你的引擎'],
		[/Start your engine/gi, '启动你的引擎！'],
		[/Start the course/gi, '开始课程（英文）'],
		[/Request a workshop/gi, '申请研讨会'],
		[/Race entries open/gi, '比赛项目开放'],
		[/Required add-on:/gi, '必需的附加组件'],
		[/Upcoming new car/gi, '即将推出的新车'],
		[/AWS Free Tier/gi, '亚马逊云科技免费套餐'],
		[/What is it/gi, '什么是 DeepRacer'],
		[/Sponsorship status/gi, '赞助状况'],
		[/Resume sponsorship/gi, '恢复赞助'],
		[/Gigabyte per month/gi, 'GB/月'],
		[/Learning resources/gi, '学习资源'],
		[/Set usage quotas/gi, '设置使用配额'],
		[/Build a Q&A bot/gi, '构建问答机器人'],
		[/Build new vehicle/gi, '打造新车'],
		[/Arcade for mobile/gi, '手机街机'],
		[/Pause sponsorship/gi, '暂停赞助'],
		[/Download software/gi, '下载软件'],
		[/Featured projects/gi, '特色项目'],
		[/Read instructions/gi, '阅读说明'],
		[/Community project/gi, '社区项目'],
		[/Gap to fastest/gi, '你和最快的差距'],
		[/Machine Learning/gi, '机器学习'],
		[/Related services/gi, '相关服务'],
		[/Completed races/gi, '完成的比赛'],
		[/Developer guide/gi, '开发者指南'],
		[/Device needed:/gi, '需要的设备：'],
		[/Pricing \(US\)/gi, '定价（美元）'],
		[/Championship cup/gi, '冠军杯'],
		[/Community Races/gi, '社区比赛'],
		[/Sponsored users/gi, '赞助用户'],
		[/Digital rewards/gi, '数字奖励'],
		[/61 race tracks/gi, '61条赛道'],
		[/12 race tracks/gi, '12条赛道'],
		[/Rules & prizes/gi, '规则和奖品'],
		[/Next challenge/gi, '下一个挑战'],
		[/Monitor usage/gi, '监控使用情况'],
		[/Current usage/gi, '当前使用情况'],
		[/Storage used/gi, '使用的存储空间'],
		[/Number of users/gi, '用户数'],
		[/Community race/gi, '社区竞赛'],
		[/days remaining/gi, '剩余天数'],
		[/Community blog/gi, '社区博客'],
		[/Skill building/gi, '技能培养'],
		[/Submit project/gi, '提交项目'],
		[/Tips & tricks/gi, '提示与技巧'],
		[/10 minutes ·/gi, '10分钟 ·'],
		[/30 minutes ·/gi, '30分钟 ·'],
		[/Notebook lab/gi, '笔记本实验室'],
		[/Project ideas/gi, '项目思路'],
		[/Create a race/gi, '建比赛可'],
		[/Race location/gi, '比赛地点'],
		[/Racing League/gi, '赛车联盟'],
		[/Creation time/gi, '创建时间'],
		[/Create a race/gi, '创建比赛'],
		[/Model storage/gi, '模型存储'],
		[/Delete models/gi, '删除模型'],
		[/View projects/gi, '查看项目'],
		[/Prizing email/gi, '奖励邮件'],
		[/Become a PRO/gi, '成为PRO'],
		[/Open Division/gi, '公开赛'],
		[/Race division/gi, '赛车部'],
		[/Manage races/gi, '管理比赛'],
		[/Import model/gi, '导入模型'],
		[/Invite users/gi, '邀请用户'],
		[/Queued usage/gi, '排队使用'],
		[/Racing since/gi, '赛车以来'],
		[/PRO Division/gi, '专业赛部'],
		[/Create model/gi, '创建模型'],
		[/Race details/gi, '车赛详情'],
		[/Winter Open/gi, '冬季公开赛'],
		[/5 minutes ·/gi, '5分钟 ·'],
		[/Copy to S3/gi, '复制到 S3'],
		[/Documentation/gi, '文档'],
		[/Pro Division/gi, '专业赛'],
		[/Get hardware/gi, '买硬件'],
		[/Create race/gi, '创建车赛'],
		[/Get started/gi, '快速开始'],
		[/Your garage/gi, '你的车库'],
		[/Your models/gi, '你的模型'],
		[/Manage tags/gi, '管理标签'],
		[/Your models/gi, '你的模特'],
		[/Date joined/gi, '加入日期'],
		[/Race again/gi, '再次参赛！'],
		[/Start now./gi, '现在开始。'],
		[/Racer name/gi, '赛车手名字'],
		[/Mod vehicle/gi, '改装车'],
		[/Get started/gi, '开始吧'],
		[/Leaderboard/gi, '排行榜'],
		[/Race dates/gi, '比赛日期'],
		[/Shell type/gi, '外壳类型'],
		[/Learn more/gi, '了解更多'],
		[/Max models/gi, '最多模型'],
		[/(optional)/gi, '（可选）'],
		[/Quick demo/gi, '快速演示'],
		[/Max usage/gi, '最大使用量'],
		[/2 hours ·/gi, '2小时 ·'],
		[/Description/gi, '描述'],
		[/Time trial/gi, '计时赛'],
		[/Earned for/gi, '挣来的'],
		[/Your rank/gi, '你的等级'],
		[/Race type/gi, '比赛类型'],
		[/1 hour ·/gi, '1小时 ·'],
		[/Race track/gi, '赛道'],
		[/Sensor(s)/gi, '传感器'],
		[/Read blog/gi, '读博客'],
		[/Play now/gi, '现在玩儿'],
		[/Country/gi, '国家/区域'],
		[/September/gi, '9月'],
		[/Resources/gi, '资源'],
		[/Algorithm/gi, '算法'],
		[/November/gi, '11月'],
		[/December/gi, '12月'],
		[/February/gi, '2月'],
		[/OVERVIEW/gi, '概述'],
		[/Workshop/gi, '作坊'],
		[/Tutorial/gi, '教程'],
		[/October/gi, '10月'],
		[/Sensors/gi, '传感器'],
		[/Add-on/gi, '附加硬件'],
		[/January/gi, '1月'],
		[/Actions/gi, '操作'],
		[/Summary/gi, '概括'],
		[/Awarded/gi, '授予'],
		[/Level:/gi, '等级：'],
		[/Alias/gi, '赛手名称'],
		[/August/gi, '8月'],
		[/Garage/gi, '车库'],
		[/Novice/gi, '新手'],
		[/Models/gi, '模型'],
		[/Delete/gi, '删除'],
		[/Status/gi, '状况'],
		[/Awards/gi, '奖项'],
		[/Badges/gi, '徽章'],
		[/Info/gi, '更多消息'],
		[/Wins/gi, '比赛胜利'],
		[/In the/gi, '在'],
		[/March/gi, '3月'],
		[/April/gi, '4月'],
		[/Forum/gi, '论坛'],
		[/Setup/gi, '设置'],
		[/Clone/gi, '克隆'],
		[/hours/gi, '小时'],
		[/per/gi, '美元每个'],
		[/June/gi, '6月'],
		[/July/gi, '7月'],
		[/Name/gi, '名字'],
		[/team/gi, '团队'],
		[/Edit/gi, '编辑'],
		[/hour/gi, '小时'],
		[/May/gi, '5月'],
		[/The/gi, '这个']
    ];

    var numTerms = replaceArray.length;
    var txtWalker = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_TEXT,
        {
            acceptNode: function (node) {
                //-- Skip whitespace-only nodes
                if (node.nodeValue.trim()) {
                    return NodeFilter.FILTER_ACCEPT;
                }

                return NodeFilter.FILTER_SKIP;
            }
        },
        false
    );
    var txtNode = null;

    while (txtNode = txtWalker.nextNode()) {
        var oldTxt = txtNode.nodeValue;

        for (var J = 0; J < numTerms; J++) {
            oldTxt = oldTxt.replace(replaceArray[J][0], replaceArray[J][1]);
        }
        txtNode.nodeValue = oldTxt;
    }

}, 3000);


