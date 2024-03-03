document.addEventListener('DOMContentLoaded', function() {
    const questions = document.querySelectorAll('.questions .question');

    questions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            if (answer.classList.contains('fade-in')) {
                answer.classList.remove('fade-in');
            } else {
                answer.classList.add('fade-in');
            }
        });
    });
});
