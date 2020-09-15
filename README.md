## Inspiration
The motive behind building the Audio Sense Alexa skill is a condition known as Auditory Hypersensitivity. People who experience auditory hypersensitivity:
- may be sensitive to certain sounds and frequencies, and can experience discomfort when subjected to them.
- can find filtering out background noises more difficult than others do.
- may experience auditory sensory overload.
The condition can cause them to feel overwhelmed when too many competing noises occur at once. It is can also lead to levels or irritation, distraction, or general discomfort. Children and adults with autism or Asperger’s frequently report auditory overload and hypersensitivity.

## What it does
- Audio Sense is an Alexa game skill that makes use of Alexa Conversations. It aims to help and train players to cope with Auditory Hypersensitivity and distractive environmental sounds. The skill sets up a game environment that can span over multiple settings and levels. The goal of the game is for the player to zone out auditory disturbances in a given environment and discern only the necessary/valid information from the same.
- The first task of the game requires the player to select the environment they wish to play in. Based on their input, each environment has a set of unique sound files that the player has to listen to, along with a set of instructions to follow.
- The game is based on the player's success rate. If all the tasks in the given environment were completed successfully, the player proceeds to the subsequent levels coupled with increasing difficulty.
<br><br>
**DISCLAIMER** This tool does not provide medical advice, and is for informational and educational purposes only, and is not a substitute for professional medical advice, treatment or diagnosis.

## How we built it
The skill makes use of the Alexa Conversations feature as its default dialog manager. The entire flow of the game was planned and developed using features provided with the Alexa skills kit, such as dialogs, utterance sets, slots, API definitions, etc. Apart from these, we also made complete use of the APL for Audio feature to generate a variety of audio responses. The backend technology used was Node.js, allowing us to write suitable API handlers and code for the seamless execution of the skill.

Demo Video:  https://www.youtube.com/watch?v=lSdUMdQojQk#action=share
Demo Presentation: https://docs.google.com/presentation/d/1g4AdETeUoO0jQDTrAt1t6DZfyvQ9Ghu9jWVaVuNfh2w/edit?usp=sharing
