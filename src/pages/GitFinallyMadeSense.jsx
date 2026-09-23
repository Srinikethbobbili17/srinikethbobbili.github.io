import { Link } from 'react-router-dom';
import PageShell from '../components/PageShell.jsx';

function CodeBlock({ children }) {
  return (
    <pre>
      <code>{children}</code>
    </pre>
  );
}

export default function GitFinallyMadeSense() {
  return (
    <PageShell className="max-w-3xl">
      <article className="pb-20">
        <header className="border-b border-archive-line py-12 md:py-16">
          <Link
            to="/learnings"
            className="text-sm font-medium text-archive-olive underline-offset-4 transition hover:text-archive-ink hover:underline"
          >
            {'<-'} Learnings from Underground
          </Link>
          <p className="mt-8 font-mono text-xs uppercase tracking-[0.18em] text-archive-muted">
            Git · Version Control · Collaboration
          </p>
          <h1 className="mt-4 font-display text-[clamp(2.4rem,7vw,4.4rem)] font-bold leading-[1.06] text-archive-ink">
            Git Finally Made Sense When I Started Working With Other People's Code
          </h1>
          <p className="mt-7 max-w-2xl text-xl leading-8 text-archive-muted">
            How a merge conflict forced me to stop memorizing commands and start
            understanding version control.
          </p>
        </header>

        <div className="report-body pt-8">
          <h2>I Thought I Knew Git</h2>

          <p>
            For a long time, Git was something I used rather than something I
            understood.
          </p>

          <p>
            I had used it regularly for my own projects. My workflow was predictable:
          </p>

          <CodeBlock>{'write code\n    ↓\ngit add\n    ↓\ngit commit\n    ↓\ngit push'}</CodeBlock>

          <p>If I needed the latest version from GitHub, I ran:</p>

          <CodeBlock>{'git pull'}</CodeBlock>

          <p>Most of the time, this worked.</p>

          <p>
            I could create repositories, clone them, make branches, commit changes,
            push code, pull updates, and open pull requests. I was productive enough
            that I assumed I understood Git.
          </p>

          <p>What I actually understood was Git's happy path.</p>

          <p>
            I knew which commands to type when the repository was in the state I
            expected. I knew that <code>git add</code> prepared changes,{' '}
            <code>git commit</code> recorded them, and <code>git push</code> sent them
            somewhere.
          </p>

          <p>But my mental model was still vague.</p>

          <p>
            GitHub felt a little like cloud storage for code. I changed files locally,
            committed them, and uploaded them. If there was a newer version online, I
            downloaded it.
          </p>

          <p>
            That model was incomplete, but while I was the only person changing the
            repository, it was rarely challenged.
          </p>

          <p>
            I did not yet have a strong understanding of commits as snapshots
            connected through history. Branches felt more like separate copies of a
            project than references to commits. Terms such as <code>HEAD</code> and{' '}
            <code>origin/main</code> appeared in commands and status messages, but I
            had not needed to think carefully about what they represented.
          </p>

          <p>
            Then I started working in a repository where other developers were making
            changes too.
          </p>

          <p>That was when the gaps in my understanding became visible.</p>

          <h2>Then Other People Started Changing the Code</h2>

          <p>
            When I worked alone, the repository usually moved in one direction. I made
            a change, committed it, and pushed it. The next change began from the
            commit I had just created.
          </p>

          <p>
            Collaboration introduced another possibility: the repository could change
            while I was still working.
          </p>

          <p>Suppose the history initially looked like this:</p>

          <CodeBlock>{'A --- B --- C\n          ↑\n         main'}</CodeBlock>

          <p>I created a branch from <code>C</code> and began working:</p>

          <CodeBlock>{'A --- B --- C\n              \\\n               D --- E\n                     ↑\n                 my-branch'}</CodeBlock>

          <p>
            While I was creating <code>D</code> and <code>E</code>, another developer
            added commits to <code>main</code>:
          </p>

          <CodeBlock>{'A --- B --- C --- F --- G\n              \\\n               D --- E\n                     ↑\n                 my-branch'}</CodeBlock>

          <p>Both lines of development were valid.</p>

          <p>
            My branch contained my work. <code>main</code> contained changes made after
            I had branched. Neither was automatically wrong or outdated in every
            sense, but they no longer described the same latest state of the project.
          </p>

          <p>
            There were now two histories that shared a starting point and then
            diverged.
          </p>

          <p>
            This was where Git stopped feeling like cloud storage. Uploading my files
            was no longer the whole problem. I had to understand how my work related
            to changes that had happened elsewhere—and how those two lines of
            development should come back together.
          </p>

          <h2>The Merge Conflict That Brought Everything to a Halt</h2>

          <p>
            Eventually, another developer and I changed overlapping parts of the code.
          </p>

          <p>
            Git attempted to combine the histories but could not determine a safe
            result automatically. I opened a file and saw something like this:
          </p>

          <CodeBlock>{'<<<<<<< HEAD\nmy changes\n=======\nincoming changes\n>>>>>>> main'}</CodeBlock>

          <p>
            This is only a simplified illustration; the labels and exact content
            depend on the operation being performed. But the feeling was accurate.
          </p>

          <p>My development work stopped.</p>

          <p>
            Not because I no longer knew how to implement the feature. Not because my
            code had necessarily disappeared. I stopped because I did not understand
            the repository's state well enough to continue confidently.
          </p>

          <p>Several questions appeared at once:</p>

          <ul>
            <li>What exactly is <code>HEAD</code>?</li>
            <li>Which side contains my changes?</li>
            <li>Where did the incoming changes come from?</li>
            <li>Are my commits still present?</li>
            <li>What does “Accept Current” mean in this specific operation?</li>
            <li>Could “Accept Incoming” remove something important?</li>
            <li>Should both versions remain?</li>
            <li>What happens if I resolve the conflict incorrectly?</li>
            <li>What happens if I push that resolution?</li>
            <li>Can I abort and return to the state I had before?</li>
          </ul>

          <p>
            The frustrating part was that I could not simply ignore Git and return to
            writing code. Git had become the thing preventing me from coding.
          </p>

          <p>
            Until then, when I encountered an unfamiliar situation, I could search for
            a command, copy it, and continue. During a conflict, that approach felt
            dangerous. A command might finish the operation while producing a result I
            did not intend.
          </p>

          <p>I did not need another command.</p>

          <p>I needed to understand what had happened.</p>

          <p>That was the turning point.</p>

          <h2>The Conflict Wasn't Git Failing</h2>

          <p>
            My first reaction to the word <code>CONFLICT</code> was simple: something
            had gone wrong.
          </p>

          <p>Eventually, I understood that Git was doing something useful.</p>

          <p>
            Two histories had changed related lines in ways Git could not safely
            combine. Git could see both versions, but it could not understand the
            intention behind either one.
          </p>

          <blockquote>
            A merge conflict was not Git breaking my code. It was Git refusing to
            guess.
          </blockquote>

          <p>That distinction changed how I approached the conflict.</p>

          <p>
            The correct resolution was not necessarily “choose mine” or “choose
            theirs.” It could be my implementation, the incoming implementation,
            selected parts of both, or newly written code that preserved the intention
            behind both changes.
          </p>

          <p>
            Buttons such as “Accept Current Change” and “Accept Incoming Change” are
            convenient, but they can hide the decision being made. “Current” and
            “incoming” also depend on the operation and context. During a rebase, for
            example, those labels may not align with the casual idea of “mine” and
            “theirs” that I expected.
          </p>

          <p>
            Git understands commits, file contents, paths, and textual changes. It
            does not fully understand what the software is supposed to do.
          </p>

          <p>That decision still belongs to the developer.</p>

          <p>
            Once I saw the conflict as a request for judgment rather than an error
            message, it became less intimidating. I still needed to be careful, but I
            could reason about it: inspect both changes, understand their purposes,
            create the intended result, test it, stage the resolved file, and continue
            the operation.
          </p>

          <h2>I Had to Understand What HEAD Actually Was</h2>

          <p>
            <code>HEAD</code> was one of those Git terms I had seen many times without
            forming a useful picture of it.
          </p>

          <p>
            In the common case, <code>HEAD</code> tells Git which branch I currently
            have checked out. That branch then points to a commit:
          </p>

          <CodeBlock>{'A --- B --- C\n          ↑\n         main\n          ↑\n         HEAD'}</CodeBlock>

          <p>
            Here, <code>HEAD</code> refers to <code>main</code>, and <code>main</code>{' '}
            refers to commit <code>C</code>. Commit <code>C</code> is therefore the
            checked-out commit.
          </p>

          <p>If I switch branches:</p>

          <CodeBlock>{'git switch feature'}</CodeBlock>

          <p>The conceptual picture changes:</p>

          <CodeBlock>{'A --- B --- C\n          ↑   \\\n         main  D\n               ↑\n            feature\n               ↑\n              HEAD'}</CodeBlock>

          <p>
            Git updates the working tree—the files currently visible in my project
            directory—to reflect the checked-out branch. <code>HEAD</code> now refers
            to <code>feature</code>, which points to <code>D</code>.
          </p>

          <p>
            There are more advanced cases, such as a detached <code>HEAD</code>, where{' '}
            <code>HEAD</code> points directly to a commit instead of through a branch.
            But I did not need every internal detail at once. I needed a reliable
            answer to a practical question:
          </p>

          <blockquote>Where am I currently standing in the history?</blockquote>

          <p>
            That answer matters when merging, rebasing, resolving conflicts, or
            committing. A command acts within the current repository state, and{' '}
            <code>HEAD</code> is a central part of describing that state.
          </p>

          <h2>Branches Finally Started Making Sense</h2>

          <p>
            I used to imagine branches as separate folders or duplicated copies of
            the project.
          </p>

          <p>
            A more useful mental model is that a branch is a movable reference to a
            commit.
          </p>

          <p>Start with:</p>

          <CodeBlock>{'A --- B --- C\n          ↑\n         main'}</CodeBlock>

          <p>Create a feature branch:</p>

          <CodeBlock>{'A --- B --- C\n          ↑\n         main\n          ↑\n       feature'}</CodeBlock>

          <p>At first, both branch names point to the same commit.</p>

          <p>After switching to <code>feature</code> and committing new work:</p>

          <CodeBlock>{'A --- B --- C\n          ↑   \\\n         main  D\n               ↑\n            feature'}</CodeBlock>

          <p>Commit again:</p>

          <CodeBlock>{'A --- B --- C\n          ↑   \\\n         main  D --- E\n                     ↑\n                  feature'}</CodeBlock>

          <p>
            The project has not been copied into a magical separate universe. The
            branch name simply identifies the current end of that line of development.
          </p>

          <p>
            When a new commit is created on the checked-out branch, that branch
            reference moves forward.
          </p>

          <p>
            This also helped me understand why switching branches changes my files.
            Git uses the selected commit's snapshot to update the working tree.
            Commits are not just labels for uploaded folders; they are objects in a
            history connected by parent relationships.
          </p>

          <p>
            The staging area, also called the index, began to make more sense too.{' '}
            <code>git add</code> does not merely tell Git that a filename is
            interesting. It prepares content in the index for the next commit. The
            commit then records a snapshot based on that staged state and links it to
            its parent commit.
          </p>

          <h2>Git and GitHub Were Not the Same Thing</h2>

          <p>Earlier, Git and GitHub felt like parts of one system.</p>

          <p>They are related, but they are not the same.</p>

          <p>
            Git is the version control system. It manages repositories, commits,
            branches, merges, and history locally. A Git repository can exist and
            function without GitHub or even without an internet connection.
          </p>

          <p>
            GitHub hosts Git repositories and provides collaboration features around
            them, including remote repository hosting, pull requests, code review,
            issue tracking, permissions, and collaboration interfaces.
          </p>

          <p>
            This distinction made commands such as <code>push</code>,{' '}
            <code>fetch</code>, and <code>pull</code> clearer.
          </p>

          <p>
            A commit initially exists in my local repository. <code>git push</code>{' '}
            asks a remote repository to update one of its references using commits I
            have locally. The remote may accept or reject that update depending on its
            current state and configured rules.
          </p>

          <p>
            GitHub is not where Git becomes real. My local repository already contains
            history. GitHub gives that history a shared location and provides tools
            for people to discuss and integrate it.
          </p>

          <h2>Local main, origin/main, and GitHub's main</h2>

          <p>Another source of confusion was the word <code>main</code>.</p>

          <p>There can effectively be three related references:</p>

          <ul>
            <li>my local <code>main</code>,</li>
            <li>my local <code>origin/main</code>,</li>
            <li>and <code>main</code> in the remote repository hosted on GitHub.</li>
          </ul>

          <p>
            My local <code>main</code> is a normal local branch that I can check out and
            commit on.
          </p>

          <p>
            <code>origin/main</code> is different. It is a remote-tracking branch stored
            in my local repository. It represents my repository's latest known
            position of the remote branch named <code>main</code> on the remote named{' '}
            <code>origin</code>.
          </p>

          <p>The remote server also has its own actual <code>main</code> reference.</p>

          <p>A simplified picture looks like this:</p>

          <CodeBlock>{'Remote repository\n\n        main\n         │\n         │ git fetch\n         ▼\n\nLocal repository\n\n    origin/main\n\n         │\n         │ merge or rebase\n         ▼\n\n      my branch'}</CodeBlock>

          <p>
            The important detail is that <code>origin/main</code> is not a live window
            into GitHub. My local repository does not automatically know every time
            someone pushes a change.
          </p>

          <p>It must communicate with the remote.</p>

          <p>
            After a fetch, <code>origin/main</code> reflects what my Git learned from the
            remote at that moment. My local <code>main</code> does not necessarily move
            with it. I decide how—or whether—to integrate that remote history into my
            local work.
          </p>

          <h2>git fetch Was More Important Than I Realized</h2>

          <p>
            Understanding <code>git fetch</code> helped the local-versus-remote model
            finally click.
          </p>

          <CodeBlock>{'git fetch origin'}</CodeBlock>

          <p>
            Fetching downloads the necessary Git objects and updates relevant
            remote-tracking references, such as <code>origin/main</code>. It does not
            automatically merge those changes into the branch I am currently working
            on.
          </p>

          <p>The intention is:</p>

          <blockquote>
            Update my knowledge of the remote repository without immediately changing
            my current line of work.
          </blockquote>

          <p>After fetching, I can inspect what changed:</p>

          <CodeBlock>{'git log --oneline --graph --decorate --all'}</CodeBlock>

          <p>I can compare branches:</p>

          <CodeBlock>{'git diff main..origin/main'}</CodeBlock>

          <p>Then I can decide how to integrate those changes.</p>

          <p>
            <code>git pull</code> combines these concerns. It first fetches and then
            performs an integration step according to the configured strategy. That
            integration is commonly a merge or a rebase, although configuration and
            command-line options can change the behavior.
          </p>

          <p>
            Pull is convenient when I already understand and want that integration.
            Fetch is valuable when I first want to observe the repository's state.
          </p>

          <p>
            That mattered during collaboration. Instead of thinking, “download
            whatever is on GitHub into my files,” I could think, “update my local
            knowledge, inspect the histories, and choose the next operation.”
          </p>

          <h2>Merge and Rebase Preserve History Differently</h2>

          <p>
            Suppose a feature branch and <code>main</code> have diverged:
          </p>

          <CodeBlock>{'          D --- E    feature\n         /\nA --- B --- C        main'}</CodeBlock>

          <p>
            Here, both branches share history through <code>B</code>. <code>main</code>{' '}
            added <code>C</code>, while the feature branch added <code>D</code> and{' '}
            <code>E</code>.
          </p>

          <p>
            One option is merging. If the feature is merged into <code>main</code>, Git
            can create a commit with both histories as parents:
          </p>

          <CodeBlock>{'          D --- E\n         /       \\\nA --- B --- C --- M    main'}</CodeBlock>

          <p>
            The merge commit <code>M</code> represents the point where the two lines
            came together. A merge can preserve the fact that development happened in
            parallel. When no divergence exists, Git may instead perform a
            fast-forward update without creating a merge commit.
          </p>

          <p>
            Another option is rebasing the feature branch onto the newer{' '}
            <code>main</code>.
          </p>

          <p>Conceptually, the result can look like this:</p>

          <CodeBlock>{"A --- B --- C --- D' --- E'\n                            ↑\n                         feature"}</CodeBlock>

          <p>The intuition that helped me was:</p>

          <blockquote>Pretend I had started my work from the latest version of main.</blockquote>

          <p>
            That is a useful mental model, though not a complete implementation-level
            description.
          </p>

          <p>
            Git does not physically pick up the original commits and move them. It
            reapplies the changes represented by <code>D</code> and <code>E</code> onto
            the new base, creating new commits <code>D'</code> and <code>E'</code>.
          </p>

          <p>
            Because commit identity depends on information including its parent, the
            recreated commits have different hashes.
          </p>

          <p>
            Neither approach is universally better. Merge and rebase present history
            differently, and teams choose workflows based on how they want to
            collaborate and review changes. Rebasing private work can produce a
            straightforward history, but rebasing shared history can disrupt other
            developers because it replaces commits they may already depend on.
          </p>

          <p>
            The important improvement for me was understanding the result I wanted
            before choosing the operation.
          </p>

          <h2>Cherry-Pick Taught Me Something Else</h2>

          <p>Cherry-picking clarified another part of Git's model.</p>

          <p>Suppose my branch looks like this:</p>

          <CodeBlock>{'A --- B --- C'}</CodeBlock>

          <p>Another branch contains:</p>

          <CodeBlock>{'      X --- Y'}</CodeBlock>

          <p>
            If I specifically need the change introduced by <code>Y</code>, I can run:
          </p>

          <CodeBlock>{'git cherry-pick <commit-for-Y>'}</CodeBlock>

          <p>The conceptual result is:</p>

          <CodeBlock>{"A --- B --- C --- Y'"}</CodeBlock>

          <p>
            <code>Y'</code> is not literally the same commit as <code>Y</code>. Git
            determines the change introduced by <code>Y</code> relative to its parent,
            applies that change to my current state, and creates a new commit with a
            new parent and therefore a new identity.
          </p>

          <p>
            This does not mean Git fundamentally stores history as only a collection
            of diffs. Git commits represent snapshots and connect history through
            parent relationships. Thinking in terms of “applying a change” is useful
            for operations such as cherry-pick and rebase, but the resulting commit
            still records a new snapshot in a new historical context.
          </p>

          <p>
            Cherry-pick showed me that Git was not just copying files between folders.
            It was constructing a new history from changes introduced elsewhere.
          </p>

          <h2>Pull Requests Finally Made More Sense</h2>

          <p>I originally thought about a pull request as the final step after coding:</p>

          <blockquote>I finished the feature, so now I create a PR.</blockquote>

          <p>
            A pull request is not a core Git command. It is a collaboration mechanism
            provided by platforms such as GitHub.
          </p>

          <p>
            It gives developers a place to inspect and discuss a proposed difference
            between lines of development before integrating them.
          </p>

          <p>A pull request helps a team understand:</p>

          <ul>
            <li>what changed,</li>
            <li>why it changed,</li>
            <li>which commits are involved,</li>
            <li>whether conflicts exist,</li>
            <li>whether the implementation should change,</li>
            <li>and whether the branch is ready to become part of the target branch.</li>
          </ul>

          <p>
            Once I understood branches and history more clearly, pull requests stopped
            feeling like a button at the end of the task.
          </p>

          <p>They became part of how developers communicate about changes.</p>

          <p>
            The branch contains the proposed history. The pull request creates a
            reviewable conversation around whether and how that history should be
            integrated.
          </p>

          <h2>The Commands Started Making Sense</h2>

          <p>
            Once the mental model improved, Git commands became easier to choose.
          </p>

          <p>
            If I want to update my knowledge of the remote, I fetch. If I want an
            isolated line of development, I create and switch to a branch. If I want
            to combine histories, I merge. If I want to replay my work on a newer
            base, I rebase. If I need one specific change, I cherry-pick. If I want to
            publish a branch, I push. If I need to understand how the repository
            reached its current state, I inspect the log.
          </p>

          <p>The commands themselves had not changed. The order of my thinking had.</p>

          <p>Before, I started with commands:</p>

          <blockquote>What Git command should I type?</blockquote>

          <p>Now I try to start with state and intention:</p>

          <blockquote>
            What state is my repository currently in, and what state do I want it to
            be in?
          </blockquote>

          <p>
            Once I can answer those questions, the command is usually much easier to
            identify.
          </p>

          <h2>The Bigger Lesson</h2>

          <p>
            The merge conflict that halted my work was frustrating, but it exposed the
            weakness in my understanding.
          </p>

          <p>I knew Git's happy path:</p>

          <CodeBlock>{'add\ncommit\npush\npull'}</CodeBlock>

          <p>
            That was enough while the history remained simple. The moment two valid
            lines of development diverged, memorized commands were no longer enough.
          </p>

          <p>
            The conflict forced me to understand what Git was tracking. It forced me
            to think about commits, branches, <code>HEAD</code>, the working tree, the
            staging area, and local versus remote state.
          </p>

          <p>
            It explained why merges exist. It made rebase less mysterious. It made
            pull requests more meaningful.
          </p>

          <p>
            Most importantly, it changed the question I asked when something went
            wrong.
          </p>

          <p>Before:</p>

          <blockquote>What command fixes this?</blockquote>

          <p>After:</p>

          <blockquote>What happened to the history?</blockquote>

          <p>
            I did not become a Git expert after resolving one conflict. I still
            encounter unfamiliar situations, and I still check documentation before
            using commands that rewrite history.
          </p>

          <p>The difference is that I now have a model to reason from.</p>

          <p>
            Git did not make sense when I memorized <code>add</code>,{' '}
            <code>commit</code>, <code>push</code>, and <code>pull</code>. It started
            making sense when another developer changed the same codebase while I was
            working on it.
          </p>

          <p>
            That conflict exposed the real problem: I knew how to use Git when
            everything went right, but I did not understand it when things went wrong.
          </p>

          <p>
            Branches stopped being commands. Rebases stopped being mysterious.
            Conflicts stopped looking like errors.
          </p>

          <p>They became different ways of answering one question:</p>

          <blockquote>What should the history of this project look like?</blockquote>
        </div>
      </article>
    </PageShell>
  );
}
