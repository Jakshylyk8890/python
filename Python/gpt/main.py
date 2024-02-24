import openai

# Set your OpenAI API key
openai.api_key = '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'

def generate_prompt(prompt):
    """
    Generate a response using OpenAI GPT-3 API.

    Args:
    - prompt (str): The input prompt for the model.

    Returns:
    - str: The generated response.
    """
    try:
        # Send a request to the OpenAI API
        response = openai.Completion.create(
            engine="text-davinci-002",  # You can change the engine based on your requirements
            prompt=prompt,
            max_tokens=150,  # Adjust max_tokens as needed
            temperature=0.7,  # Adjust temperature as needed
            n=1  # Number of completions to generate
        )

        # Extract and return the generated text
        generated_text = response.choices[0].text.strip()
        return generated_text

    except openai.error.OpenAIError as e:
        # Handle any OpenAI API errors
        print(f"Error: {e}")
        return None

# Example usage
prompt_text = "Once upon a time"
generated_response = generate_prompt(prompt_text)

if generated_response:
    print("Generated Response:")
    print(generated_response)
