# Inspiration
The motive behind building the Audio Sense Alexa skill is a condition known as Auditory Hypersensitivity. People who experience auditory hypersensitivity:
- may be sensitive to certain sounds and frequencies, and can experience discomfort when subjected to them.
- can find filtering out background noises more difficult than others do.
- may experience auditory sensory overload.

A short video description to illustrate what we're talking about: https://youtu.be/ipI8hOGjVUs (skip ahead to "1:35" to listen to the audio simulation)

The condition can cause them to feel overwhelmed when too many competing noises occur at once. It is can also lead to levels or irritation, distraction, or general discomfort. Children and adults with autism or Asperger’s frequently report auditory overload and hypersensitivity.
We've also done our research into this condition and what may aid in its therapy, here's a link to the paper we used: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4707379/

# What it does
- Audio Sense is an Alexa game skill that makes use of Alexa Conversations. It aims to help and train players to cope with Auditory Hypersensitivity and distractive environmental sounds. The skill sets up a game environment that can span over multiple settings and levels.
- The goal of the game is for the player to zone out auditory disturbances in a given environment; while trying to discern only the necessary/valid information from the same. Context related information is used to train players to deduce information that could not be grasped.
- Starting the game requires the player to select the environment they wish to play in. Based on their input, each environment has a set of unique sound files that the player has to listen to, along with a set of instructions to follow.
- The game is based on the player's success rate. If all the tasks in the given environment were completed successfully, the player proceeds to the subsequent levels coupled with increasing difficulty.

__DISCLAIMER__ This tool does not provide medical advice, and is for informational and educational purposes only, and is not a substitute for professional medical advice, treatment or diagnosis.


# How we built it
The skill makes use of the Alexa Conversations feature as its default dialog manager. The entire flow of the game was planned and developed using features provided with the Alexa skills kit, such as dialogs, utterance sets, slots, API definitions, etc. The cornerstone of our project is how we made use of the APL for Audio and all its functionalities. The backend technology used was Node.js, allowing us to write suitable API handlers and code for the seamless execution of the skill.

# APL for Audio Implementation
- All the sound files that you heard in the demo were mixed and sequenced using the APL for Audio and Alexa Sound kit Library.
- Carefully picked out the right sounds for each environment and mixed them seamlessly, incorporating volume filters and silences.
- Made use of a random selector to bring a sense of spontaneity to the Alexa responses.

# Challenges we ran into
Since the Conversations feature is still in its Beta stage, we could not find documented solutions for many of the problems faced during the skill development. Since learning resources were also scarce, the trial and error method was our best friend during development.

# Accomplishments that we're proud of
We're extremely proud that we were able to develop a skill that covered the core logic of our idea. This being the first Amazon skill either of us has ever developed, we were elated at the end with the results we achieved.

# What we learned
We learned the process that's involved in creating a good Alexa skill. We also deeply understood the APL for Audio feature provided in the skills kit, making use of it intensely in our skill.

# What's next for Audio Sense
- Implementation of more game sound environments.
- Multiple levels and training rounds.
- Ability for users to create their own unique environmental sound files.
- User adaptive levels and progress updates.
- Analysis and diagnosis of weaknesses in the user, with subsequent training and games to help improve the same.
- Additional rounds to help users in getting used to the various auditory disturbances that may exist in the selected environment, and help them learn how to zone out the same.

# Additional material
#### A detailed video explanation including an extended demo
https://drive.google.com/file/d/1_U4AFrOUjamPV9g9yqByOQF2j-4hXQxh/view?usp=sharing

#### The presentation for our submission
https://docs.google.com/presentation/d/1g4AdETeUoO0jQDTrAt1t6DZfyvQ9Ghu9jWVaVuNfh2w/edit?usp=sharing

# Built With
```amazon-alexa```
```apl```
```javascript```
```node.js```

# Try it out
<a href="https://www.amazon.com/dp/B08J45RYWD">Alexa Audio Sense</a>
