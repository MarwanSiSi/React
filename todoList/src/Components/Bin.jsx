import styles from "./Bin.module.css";

function Bin({ onClick }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
      fill="black"
      onClick={onClick}
      className={styles.bin}
      // onMouseLeave={(e) => {
      //   e.target.style.fill = "black";
      //   e.target.style.cursor = "default";
      // }}
      // onMouseEnter={(e) => {
      //   e.target.style.fill = "red";
      //   e.target.style.cursor = "pointer";
      // }}
    >
      <path d="M253-99q-38.21 0-65.11-26.6Q161-152.2 161-190v-552h-58v-91h228v-47h297v47h228v91h-58v552q0 37.18-27.21 64.09Q743.59-99 706-99H253Zm453-643H253v552h453v-552ZM357-268h74v-398h-74v398Zm173 0h75v-398h-75v398ZM253-742v552-552Z" />
    </svg>
  );
}

export default Bin;
