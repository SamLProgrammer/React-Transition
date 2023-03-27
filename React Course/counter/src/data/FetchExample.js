export const fetchingCatFact = async () => {
    
    const fact = await fetch('https://catfact.ninja/fact');
    return await fact.json();
}