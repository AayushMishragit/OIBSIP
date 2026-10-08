const temperature = document.getElementById("temperature");
const fromUnit = document.getElementById("fromUnit");
const toUnit = document.getElementById("toUnit");
const convertBtn = document.getElementById("convertBtn");
const result = document.getElementById("result");

convertBtn.addEventListener("click", async () => {

  const value = temperature.value;

  const from = fromUnit.value;
  const to = toUnit.value;

  const url = `https://getnextool.com/api/v1/convert?from=${from}&to=${to}&value=${value}`;

  try {

    const response = await fetch(url);

    const data = await response.json();

    result.textContent = data.to.value;

  } catch (error) {

    console.log(error);
    result.textContent = "Something went wrong";

  }

});
