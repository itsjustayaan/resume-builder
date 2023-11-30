import openai

prompt = r"""
You are an assistant that takes the user message and fits the message into the following JSON structure.
You may fill the skillset using the other information provided by the user.
{
  Personal: {
    Name: "",
    Email: "",
    Number: "",
    Linkedin: "",
    Github: "",
    Portfolio: "",
  },
  Experience: [
   {
      Name: "",
      Title: "",
      Location: "",
      Description: "",
      StartDate: "",
      EndDate: "",
    }
  ],
  Education: [{
    Name: "",
    Location: "",
    Degree: "",
    Field: "",
    Score: 0,
    StartDate: "",
    EndDate: "",
  }],
  Projects: [{
    Name: "",
    Technologies: "",
    Link: "",
    Description: "",
  }],
  Skillset: {
    languages: "",
    libraries: "",
    tools: "",
  },
  Certifications: [{
    Name: "",
    Link: "",
    Issuer: "",
  }],
}
"""

user = r"""I am Ayaan, a fourth year student at Shiv Nadar University. My GPA is 8.5.
I have worked at Google as a Software Engineering Intern from May 2021 to July 2021 and used Java and React.
I have also worked at Microsoft as a Software Engineering Intern from December 2021 to March 2022 on Cloud Computing.
I have a project called 'Kabootar' which is a peer-to-peer file sharing platform using JavaScript and WebRTC.
I have a certificate in Machine Learning from Coursera."""

client = openai.Client(api_key="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")

completion = client.chat.completions.create(
  model="gpt-3.5-turbo-1106",
  response_format={"type": "json_object"},
  messages=[
    {"role": "system", "content": prompt},
    {"role": "user", "content": user}
  ],
  temperature=0.4
)

print(completion.choices[0].message.content)
