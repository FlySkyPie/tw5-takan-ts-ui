import clsx from 'clsx';

import styles from './styles.module.scss';

export const App = () => {
	const onClockClose = () => {
		// Do something
	}

	return (
		<div class={styles.ui}>
			<nav class={clsx(styles.navbar, styles.app)}>
				<div class="header-user-left">
					<span class={styles["header-btn-icon"]}>
						<button class="" aria-expanded="false">
							Board
						</button>
						<span class=" tc-reveal" hidden={true}>
						</span>
					</span>
				</div>
				<div class={styles["header-user"]}>
					<span class={styles["header-btn-icon"]}>
						<button class="" title="Rearrange lists">A</button>
						<button class=""
							style="fill:#fff;"
							title="Delete board"
							aria-expanded="false">
							<svg
								width="22pt"
								height="22pt"
								class="tc-image-delete-button tc-image-button"
								viewBox="0 0 128 128"><g fill-rule="evenodd"
									transform="translate(12)">
									<rect width="105" height="16" y="11" rx="8">
									</rect>
									<rect width="48" height="16" x="28" rx="8">
									</rect>
									<rect width="16" height="112" x="8" y="16" rx="8">
									</rect><rect width="88" height="16" x="8" y="112" rx="8">
									</rect>
									<rect width="16" height="112" x="80" y="16" rx="8">
									</rect>
									<rect width="16" height="112" x="56" y="16" rx="8">
									</rect>
									<rect width="16" height="112" x="32" y="16" rx="8">
									</rect>
								</g>
							</svg>
						</button>
						<span class="tc-popup-keep tc-reveal" hidden={true}></span>
						<button class="" title="Add new board" aria-expanded="false">
							+
						</button>
						<span class="tc-popup-keep tc-reveal" hidden={true}></span>
						<button class="" title="Switch back to TW5" onClick={onClockClose}>
							<span style="fill:white;">
								<svg
									width="22pt"
									height="22pt"
									class="tc-image-opacity tc-image-button"
									viewBox="0 0 128 128"><g fill-rule="evenodd">
										<path d="M102.362 65a51.595 51.595 0 01-1.942 6H82.584a35.867 35.867 0 002.997-6h16.78zm.472-2c.423-1.961.734-3.963.929-6H87.656a35.78 35.78 0 01-1.368 6h16.546zm-3.249 10a51.847 51.847 0 01-3.135 6H75.812a36.205 36.205 0 005.432-6h18.341zm-4.416 8c-1.424 2.116-3 4.12-4.71 6H60.46a35.843 35.843 0 0012.874-6h21.834zm-7.513-34h16.107C101.247 20.627 79.033 0 52 0 23.281 0 0 23.281 0 52c0 25.228 17.965 46.26 41.8 51h20.4a51.66 51.66 0 0015.875-6H39v-2h42.25a52.257 52.257 0 007.288-6H39v-2h4.539C27.739 83.194 16 68.968 16 52c0-19.882 16.118-36 36-36 18.186 0 33.222 13.484 35.656 31zm.22 2h16.039a52.823 52.823 0 010 6H87.877a36.483 36.483 0 000-6z"></path><path d="M76 128c28.719 0 52-23.281 52-52s-23.281-52-52-52-52 23.281-52 52 23.281 52 52 52zm0-16c19.882 0 36-16.118 36-36S95.882 40 76 40 40 56.118 40 76s16.118 36 36 36z"></path><path d="M37 58h53v4H37v-4zm3-8h53v4H40v-4zm0-8h53v4H40v-4zm-8 24h53v4H32v-4zm-2 8h53v4H30v-4zm-3 8h53v4H27v-4z">
										</path>
									</g>
								</svg>
							</span>
						</button>
					</span>

				</div>
			</nav>
			<nav class={clsx(styles.navbar, styles.board)}>
				You need to either create a board or switch to an existing one
			</nav>
			<div class={styles.lists}>
				<span class=" tc-reveal">
					<div class={styles["list"]}>
						<div class={styles["semitransparent"]}>
							<button
								class={styles["semitransparentborderless"]}
								style="width:100%;text-align:left;">
								Add a list...
							</button>
						</div>
					</div>
				</span>

				<span class=" tc-reveal" hidden={true}></span>
				<span class=" tc-reveal" hidden={true}></span>

			</div>
		</div>
	);
};