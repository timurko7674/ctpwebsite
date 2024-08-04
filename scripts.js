function toggleUniforms() {
    const uniformsSection = document.getElementById('uniforms');
    if (uniformsSection.style.display === 'none' || uniformsSection.style.display === '') {
        uniformsSection.style.display = 'block';
    } else {
        uniformsSection.style.display = 'none';
    }
}

function toggleHelp() {
    const helpSection = document.getElementById('help');
    if (helpSection.style.display === 'none' || helpSection.style.display === '') {
        helpSection.style.display = 'block';
    } else {
        helpSection.style.display = 'none';
    }
}
